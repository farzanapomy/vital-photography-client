import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './PlaceOrder.css'
const PlaceOrder = () => {
    const { ID } = useParams()
    const { user } = useFirebase()

    const [singleService, setSingleService] = useState([])
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        const url = `https://whispering-crag-95185.herokuapp.com/services/${ID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, [])

    const onSubmit = data => {
        axios.post('http://localhost:5000/allOrders', data)
            .then(res => {
                if(res.data.insertedId){
                    alert('Your Orders successfully added');
                }
                console.log(res);
            })


        console.log(data);
    }


    return (
        <div>
            <h2>Order Here</h2>

            <div>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <img src={singleService?.img} alt="" />
                        </Col>
                        <Col sm={6}>
                            <form onSubmit={handleSubmit(onSubmit)} className='input-field'>
                                <input
                                    {...register("text", { required: true })}
                                    placeholder='Enter product name'
                                    defaultValue={singleService.name}
                                />
                                <input
                                    {...register("name", { required: true })}
                                    placeholder='Enter Your Name'
                                    defaultValue={user.displayName}
                                />
                                <input
                                    {...register("email", { required: true })}
                                    placeholder='Enter your email'
                                    defaultValue={user.email}
                                />

                                <input
                                    {...register("address", { required: true })}
                                    placeholder='Enter Your Address'
                                />
                                <input
                                    {...register("number", { required: true })}
                                    placeholder='Enter Phone Number'
                                />
                                <input className='submit' type="submit" value="Order Now" />
                            </form>

                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    );
};

export default PlaceOrder;