import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://vital-server.onrender.com/allOrders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const note = window.confirm('Do you want to delete this Order?');
    if (note) {
      const url = `https://vital-server.onrender.com/allOrders/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert('Order successfully deleted');
          }
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
          console.log(data);
        });
    }
  };

  return (
    <div className="container">
      <h2>Manage all Orders</h2>

      <Table hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Index</th>
            <th>Product Name</th>
            <th>User Name</th>
            <th>State</th>
            <th>Action</th>
          </tr>
        </thead>

        {orders.map((order, index) => (
          <tbody key={order._id}>
            <tr>
              <td>{index}</td>
              <td>{order.text}</td>
              <td>{order.name}</td>
              <td>my Order</td>
              <td>
                <button onClick={() => handleDelete(order._id)}>Delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageOrder;
