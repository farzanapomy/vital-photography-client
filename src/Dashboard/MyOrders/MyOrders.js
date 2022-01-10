import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import './MyOrders.css'


const MyOrders = () => {
    const { user } = useAuth()

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://whispering-crag-95185.herokuapp.com/allOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])


    const handleDelete = (id) => {
        const note = window.confirm('Do you want to delete this Order?');
        if (note) {
            const url = `https://whispering-crag-95185.herokuapp.com/allOrders/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        alert("Order successfully deleted")
                    }
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining)
                    console.log(data);
                })
        }

    }





    return (
        <div className=''>
            <h2>Your total orders  {orders.length}</h2>
            <div className="row container">
                {
                    orders.map(order =>
                        <div className='col-md-5 m-4 p-4 border card-item'
                            key={order._id}>
                            <h6>Service Name: {order.text}</h6>
                            <p>Phone:{order.number}</p>
                            <p>Charge {order.price}</p>
                            {
                                order.payment ? "Paid" :
                                    <Link to={`/dashboard/MyOrders/${order._id}`}> <button>Pay</button></Link>
                            }
                            <button onClick={() => handleDelete(order._id)} className='delete-btn '>Delete Order</button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default MyOrders;