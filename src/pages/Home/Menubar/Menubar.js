import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'
import useFirebase from '../../../hooks/useFirebase';

const Menubar = () => {
    const { user } = useFirebase()
    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home#home">VITAL PHOTOGRAPHY</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
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

                    </Nav>
                </Container>
            </Navbar>

        </>

    );
};

export default Menubar;