import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import AddReviews from '../../Dashboard/AddReviews/AddReviews'
import './DashBoard.css'


// import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import useAuth from '../../hooks/useAuth';
import AddServices from '../../pages/AddServices/AddServices';

const DashBoard = () => {
    const { logOut } = useAuth();


    return (
        <div className="container my-5">
            <div className="dashboard-container ">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard">
                            <h5 style={{ margin: "15px", padding: "15px", textDecoration: "" }}>User Dashboard</h5>
                            {/* {!admin && <div> */}
                            <Link to='/home'>
                                <button className="dashboard-menu mt-5 btn btn-warning px-5">Back</button>
                            </Link>
                           
                            <Link to={`/dashboard/addReviews`}>
                                <li className="dashboard-menu mt-5">AddReview</li>
                            </Link>
                            <Link to={`/dashboard/ManageOrder`}>
                                <li className="dashboard-menu mt-5">ManageOrder</li>
                            </Link>
                            <Link to={`/dashboard/MyOrders`}>
                                <li className="dashboard-menu mt-5">MyOrders</li>
                            </Link>

                        </div>

                        {/* } */}

                        {/* { admin && */}

                        {/* <div>
                            <Link to='/home'>
                                <button className="dashboard-menu mt-5 btn btn-warning px-5">Back</button>
                            </Link>
                            <Link to={`${url}/makeAdmin`}>
                                <li className="dashboard-menu mt-5">MakeAdmin</li>
                            </Link>
                            <Link to={`${url}/addProduct`}>
                                <li className="dashboard-menu mt-5">AddProduct</li>
                            </Link>
                            <Link to={`${url}/managerOrder`}>
                                <li className="dashboard-menu mt-5">Manage All Order</li>
                            </Link>
                            <Link to={`${url}/managerProduct`}>
                                <li className="dashboard-menu mt-5">Manage All Product</li>
                            </Link>
                        </div> */}
                        {/* } */}

                        <button onClick={logOut} style={{ backgroundColor: "blue", color: 'white' }} className='btn px-4 m-3'>LogOut</button>
                    </div>



                    <div className="col-md-9 dashboard">
                        <Outlet></Outlet>

                        {/* <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                            <AdminRoute path={`${path}/managerOrder`}>
                                <ManageOrder></ManageOrder>
                            </AdminRoute>
                            <AdminRoute path={`${path}/managerProduct`}>
                                <ManagerProduct></ManagerProduct>
                            </AdminRoute> */}
                    </div>
                </div>
            </div>
        </div>



        // </div >
    );
};

export default DashBoard;