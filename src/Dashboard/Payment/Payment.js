import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {paymentID}=useParams()
    const [payment,setPayment]=useState({});

    useEffect(()=>{
        fetch(`https://whispering-crag-95185.herokuapp.com/payment/${paymentID}`)
        .then(res=>res.json())
        .then(data=>setPayment(data))
    },[paymentID])

    return (
        <div>
            <h2>User Name: {payment.name}</h2>
            <h5>Payment For: {payment.text} service</h5>
            <p>Total amount: ${payment.price}</p>
        </div>
    );
};

export default Payment;