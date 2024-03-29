import React from 'react';
import { useForm } from 'react-hook-form';

import './MakeAdmin.css';

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (email) => {
    fetch('https://vital-server.onrender.com/users/makeAdmin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(email),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert('Admin created successfully');
          reset();
        }
        console.log(data);
      });
  };
  return (
    <div>
      <h2>Make An Admin</h2>
      <div className="w-75 mx-auto mt-5 d-flex justify-content-center ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('email', { required: true })}
            placeholder="Enter Email"
            className="input-field "
          />
          <br />
          <input className="admin-btn my-3" type="submit" value="Make Admin" />
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
