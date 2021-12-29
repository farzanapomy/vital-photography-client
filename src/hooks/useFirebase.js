import authInitialize from "../pages/Login/firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useEffect, useState } from "react";
authInitialize()


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [admin, setAdmin] = useState(false)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();

    // sign in with google 

    const signInWithGoogle = (navigate) => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                console.log(user);
                navigate('/dashboard')
            })
            .catch((error) => {
                setError(error.massage)
            })
            .finally(() => setIsLoading(false))
    }

    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true)
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, "POST")

                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                    }).catch((error) => {
                        setError(error.massage)
                    })
                navigate('/dashboard')
            })
            .catch((error) => {
                setError(error.massage)
            })
            .finally(() => setIsLoading(false))
    }

    const logInUser = (email, password, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                navigate('/dashboard')
                console.log(user);

            })
            .catch((error) => {
                setError(error.massage)
            })
            .finally(() => setIsLoading(false))
    }


    // setAdmin


    useEffect(() => {
        const url = `https://whispering-crag-95185.herokuapp.com/users/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])






    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {

            })
            .catch(error => {
                setError(error.massage)
            })
            .finally(() => setIsLoading(false))
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


    // save user
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://whispering-crag-95185.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }




    return {
        signInWithGoogle,
        user,
        admin,
        isLoading,
        registerUser,
        logInUser,
        logOut,
        error
    }

};

export default useFirebase;