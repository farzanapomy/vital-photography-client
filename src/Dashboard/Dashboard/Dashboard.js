import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './DashBoard.css'
import useAuth from '../../hooks/useAuth';

const DashBoard = () => {
    const { admin } = useAuth();


    return (
        <div className="container my-5">
            <div className="dashboard-container">
                <div className="row">
                    <div className="col-md-3 ">
                        {/* <div className="dashboard"> */}
                        <h5 style={{ margin: "15px", padding: "15px", textDecoration: "" }}>User Dashboard</h5>
                        <div>
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


                        {admin &&

                            <div>
                                <Link to='/home'>
                                    <button className="dashboard-menu mt-5 btn btn-warning px-5">Back</button>
                                </Link>
                                <Link to={`/dashboard/makeAdmin`}>
                                    <li className="dashboard-menu mt-5">MakeAdmin</li>
                                </Link>
                                <Link to={`/dashboard/addProduct`}>
                                    <li className="dashboard-menu mt-5">AddProduct</li>
                                </Link>
                                <Link to={`/dashboard/managerOrder`}>
                                    <li className="dashboard-menu mt-5">Manage All Order</li>
                                </Link>
                                <Link to={`/dashboard/managerProduct`}>
                                    <li className="dashboard-menu mt-5">Manage All Product</li>
                                </Link>
                            </div>
                        }


                        {/* </div> */}



                    </div>
                    <div className="col-md-9 dashboard">
                        <Outlet></Outlet>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default DashBoard;