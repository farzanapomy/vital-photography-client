import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'
import './Menubar.css';
import useAuth from '../../../hooks/useAuth';

const Menubar = () => {
    const { user, logOut } = useAuth()
    return (

        <>
            <Navbar bg="" className='mb-2 ' variant="dark" sticky="right" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className='main-title' as={Link} to="/home#home">
                        VITAL PHOTOGRAPHY
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                            {/* {
                                user.email &&
                                <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>
                            } */}
                            {!user.email &&
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            {
                                user?.email &&
                                <Nav.Link as={Link} to="/login" className='text-white'>
                                    Hello  {user?.displayName}
                                </Nav.Link>
                            }
                            {
                                user?.email &&
                                <Nav.Link as={Link} to="/login" className='logout-btn'>
                                    <button onClick={logOut}>Logout</button>
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>

    );
};

export default Menubar;