import authInitialize from "../pages/Login/firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from "react";
authInitialize()


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                setError(error.massage)
            })
    }


    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
            .catch(error => {
                setError(error.massage)
            })
    };

    // to check user state 


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])


    return {
        signInWithGoogle,
        user,
        isLoading,
        logOut,
        error
    }

};

export default useFirebase;