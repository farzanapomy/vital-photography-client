import authInitialize from "../pages/Login/firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from "react";
authInitialize()


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();

    // sign in with google 

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

    const registerUser = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

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