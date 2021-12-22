import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'
import useFirebase from '../../../hooks/useFirebase';
import './Menubar.css';

const Menubar = () => {
    const { user,logOut } = useFirebase()
    return (

        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand className='main-title' as={Link} to="/home#home">VITAL PHOTOGRAPHY</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        {
                            user.email &&
                            <Nav.Link href="#features">Dashboard</Nav.Link>
                        }
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
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
                </Container>
            </Navbar>


        </>

    );
};

export default Menubar;