import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/allOrders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className='container'>
            <h2>Manage all Orders</h2>

            <Table hover variant="dark" responsive>
                <thead

                >
                    <tr>
                        <th>Index</th>
                        <th>Product Name</th>
                        <th>User Name</th>
                        <th>State</th>
                        <th>Action</th>
                    </tr>
                </thead>

                {orders.map((order, index) =>
                    <tbody
                        key={order._id}
                    >
                        <tr>
                            <td>{index}</td>
                            <td>{order.text}</td>
                            <td>{order.name}</td>
                            <td>my Order</td>
                            <td>Delete Order</td>
                        </tr>
                        
                    </tbody>
                    )}

            </Table>

        </div>
    );
};

export default ManageOrder;