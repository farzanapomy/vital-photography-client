import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';



const stripePromise = loadStripe('pk_test_51JwCt5Hck8KbGWQKzdsGm8EV0mQygETYpOCGo17U8mQxGmZ8cjyneCsEY6P2FL4drRqfM9lkzSFv0RnEUGIeXymG00AKuCVEyL')

const Payment = () => {
    const { paymentID } = useParams()
    const [payment, setPayment] = useState({});
    console.log(payment);

    useEffect(() => {
        fetch(`https://whispering-crag-95185.herokuapp.com/payment/${paymentID}`)
            .then(res => res.json())
            .then(data => setPayment(data))
    }, [paymentID])

    return (
        <div>

            <h2>User Name: {payment.name}</h2>
            <h5>Payment For: {payment.text} service</h5>
            <p>Total amount: ${payment.price}</p>

            {payment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    payment={payment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;