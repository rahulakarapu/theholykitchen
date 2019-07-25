import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

function Header(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home" className="hk-logo">Holy Kitchen</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navLinks">
                    <Nav.Link className="headerNavItem" href="#home">Home</Nav.Link>
                    <Nav.Link className="headerNavItem" href="#story">Our Story</Nav.Link>
                    <Nav.Link className="headerNavItem" href="#menu">Menu</Nav.Link>
                    <Nav.Link className="headerNavItem" href="#contact">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;