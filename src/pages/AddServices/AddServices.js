import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddServices.css';

const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post('https://vital-photography-server.up.railway.app/services', data)
      .then((res) => {
        if (res.data.insertedId) {
          alert('Your Data Successfully added');
          return;
        }
        console.log(res);
      });
    reset();
    console.log(data);
  };

  return (
    <>
      <div className="w-50 mx-auto">
        <h2>Add a Service here</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('name', { required: true })}
            placeholder="Enter service name"
            className="p-2 w-100 input-field"
          />

          <input
            {...register('name', { required: true })}
            placeholder="Enter service name"
            className="p-2 w-100 input-field"
          />

          <input
            {...register('image', { required: true })}
            placeholder="enter img link"
            className="p-2 w-100 input-field"
          />

          <input
            {...register('number', { required: true })}
            placeholder="enter price"
            className="p-2 w-100 input-field"
          />

          <input className="btn btn-warning" type="submit" />
        </form>
      </div>
    </>
  );
};

export default AddServices;
