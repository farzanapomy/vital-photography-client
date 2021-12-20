import React from 'react';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='login-form '>
            <input {...register("firstName", { required: true, maxLength: 20 })} />
            <input {...register("email", { pattern: /^[A-Za-z]+$/i })} />
            <input className='submit border-0' type="submit" />
        </form>
    );
};

export default Register;