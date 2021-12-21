import React from 'react';
import { useForm } from "react-hook-form";
import './Login.css'

const Login = () => {
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
        </div>
    );
};

export default Login;