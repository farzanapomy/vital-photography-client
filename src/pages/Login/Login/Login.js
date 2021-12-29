import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInWithGoogle, logInUser,error } = useAuth()
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        logInUser(data.email, data.password)
        console.log(data)
    };

    return (
        <div>
            <h2>Please Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
                <input {...register("email")} />
                <input {...register("password")} />
                <input type="submit" />
            </form>
            <div>
                <h6>New User ??
                    <Link to='/register'> Go to register.
                    </Link>
                </h6>
            </div>
                <p>{error}</p>
            <button onClick={signInWithGoogle} className='login-btn'>signin with google</button>
        </div>
    );
};

export default Login;