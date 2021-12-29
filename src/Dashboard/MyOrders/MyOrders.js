import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth()

    const [order, setOrder] = useState([])

    useEffect(() => {
        fetch(`https://whispering-crag-95185.herokuapp.com/MyOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

        

    return (
        <div>
            <h2>this is MyOrders</h2>
        </div>
    );
};

export default MyOrders;