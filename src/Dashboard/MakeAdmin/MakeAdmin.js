import React from 'react';
import { useForm } from 'react-hook-form';
// import useAuth from '../../../hooks/useAuth';


const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = (email) => {
        fetch('https://whispering-crag-95185.herokuapp.com/users/makeAdmin', {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => {
                // if (data.modifiedCount) {
                //     alert('Admin created successfully')
                reset();

                // }
                console.log(data)
            })


        // console.log(data)
    }
    return (
        <div>
            <h2>Make An Admin</h2>
            <div className='w-75 mx-auto mt-5 d-flex justify-content-center ' >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("email", { required: true })}
                        placeholder='Enter Email'
                        className='p-2 w-100 input-field'
                    />
                    {/* <p>style={{ marginTop: '200px' }}</p> */}
                    <input className='btn btn-warning my-3 px-5' type="submit" value="Make Admin" />
                </form>

            </div>
        </div>
    );
};

export default MakeAdmin;