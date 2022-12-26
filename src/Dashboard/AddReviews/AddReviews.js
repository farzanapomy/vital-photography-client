import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './AddReviews.css';

const AddReviews = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    axios
      .post('https://vital-photography-server.up.railway.app/AddReviews', data)
      .then((res) => {
        if (res.data.insertedId) {
          alert('Your review added on home page.');
          return;
        }
        console.log(res);
        reset();
      });

    console.log(data);
  };

  return (
    <>
      <div className="mx-auto">
        <h2>Give your review here</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="input-field">
          <input
            {...register('name', { required: true })}
            required
            placeholder="Enter your name"
          />
          <input
            {...register('text', { required: true })}
            required
            placeholder="Enter service name"
          />

          <textarea
            {...register('description', { required: true })}
            required
            placeholder="Write opinion about product"
            className="mx-auto"
          />

          <input
            {...register('image', { required: true })}
            required
            placeholder="enter img link"
          />

          <input
            type="number"
            required
            placeholder="Enter rating"
            {...register('ratting')}
            min="1"
            max="5"
          />

          <input className="submit" type="submit" />
        </form>
      </div>
    </>
  );
};

export default AddReviews;
