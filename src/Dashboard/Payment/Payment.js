import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {paymentID}=useParams()
    const [payment,setPayment]=useState({});

    useEffect(()=>{
        fetch(`https://whispering-crag-95185.herokuapp.com/allOrders/${paymentID}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[paymentID])

    return (
        <div>
            <h2>{paymentID}</h2>
            <p>{payment.name}</p>
        </div>
    );
};

export default Payment;