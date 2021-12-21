import React from 'react';
import { useForm } from "react-hook-form";
import useFirebase from '../../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { signInWithGoogle, logOut } = useFirebase()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    if (logOut) {
        console.log('clicked');
    }
    return (
        <div>
            <h2>Please Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
                <input {...register("email")} />
                <input {...register("password")} />

                <input type="submit" />
            </form>
            <button onClick={signInWithGoogle}>signin with google</button>
            <button onClick={logOut}>logout</button>
        </div>
    );
};

export default Login;