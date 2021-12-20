import React from 'react';
import { useForm } from "react-hook-form";
import './Login.css'

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='login-form '>
            <input
                {...register("email")}
            />

            <input
                {...register("password",
                    { pattern: /^[A-Za-z]+$/i })}
            />
            <input
                {...register("password",
                    { pattern: /^[A-Za-z]+$/i })}
            />
            <input className='submit border-0' type="submit" />
        </form>
    );
};

export default Login;