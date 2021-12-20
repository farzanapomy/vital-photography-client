import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav }from 'react-bootstrap'

const Menubar = () => {
    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">VITAL PHOTOGRAPHY</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>

    );
};

export default Menubar;