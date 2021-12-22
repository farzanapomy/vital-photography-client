import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './PlaceOrder.css'
const PlaceOrder = () => {
    const { ID } = useParams()
    const { user } = useFirebase()
    console.log(ID);
    const [singleService, setSingleService] = useState([])
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        const url = `http://localhost:5000/services/${ID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, [])

    const onSubmit = data => {
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
                                    defaultValue={singleService?.name}
                                />
                                <input
                                    {...register("name", { required: true })}
                                    placeholder='Enter Name'
                                    defaultValue={user.displayName}
                                />
                                <input
                                    {...register("email", { required: true })}
                                    placeholder='Enter email'
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