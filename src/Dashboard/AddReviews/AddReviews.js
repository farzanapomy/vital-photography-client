import axios from 'axios';
import React from 'react';

import { useForm } from 'react-hook-form';
import './AddReviews.css';

const AddReviews = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        axios.post('http://localhost:5000/AddReviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Your review added on home page.");
                    return;
                }
                console.log(res);
            })

        console.log(data);
    }

    return (
        <>
            <div className='w-50 mx-auto'>
                <h2>Give your review here</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name", { required: true })}
                        placeholder='Enter service name'
                        className='p-2 w-100 input-field'
                    />

                    <input
                        {...register("name", { required: true })}
                        placeholder='Enter service name'
                        className='p-2 w-100 input-field'

                    />

                    <input
                        {...register("image", { required: true })}
                        placeholder='enter img link'
                        className='p-2 w-100 input-field'
                    />


                    <input type="number"
                        required
                        placeholder='Enter rating'
                        {...register("ratting",)}
                        min="1"
                        max="5"
                        className='p-2 w-100 input-field'
                    />

                    <input className='btn btn-warning' type="submit" />
                </form>
            </div>
        </>
    );
};

export default AddReviews;