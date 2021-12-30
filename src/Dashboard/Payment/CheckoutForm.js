import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';
import './CheckoutForm.css'
const CheckoutForm = ({ payment }) => {
    const stripe = useStripe()
    const elements = useElements();
    const [error,setError]=useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setError(error.message);
        }
        else {
            setError('')
            console.log(paymentMethod);
        }

    }


    return (
        <div>
            <form onSubmit={handleSubmit}  className='text-light'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe} className='pay-btn'>
                    Pay ${payment.price}
                </button>
            </form>
            {
                error && <p className='bg-danger p-2 m-4'>{error}</p>
            }
        </div>
    );
};

export default CheckoutForm;