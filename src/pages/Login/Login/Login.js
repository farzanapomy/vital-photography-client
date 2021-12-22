import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { signInWithGoogle } = useFirebase()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

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

            <button onClick={signInWithGoogle} className='login-btn'>signin with google</button>
        </div>
    );
};

export default Login;