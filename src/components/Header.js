import React from 'react';
import  Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar collapseOnSelect variant='dark' expand='md'>
            <Nav>
                <Nav.Link as={Link} to='/home'>
                    Home
                </Nav.Link>
                <Nav.Link as={Link} to='/characters'>
                    Characters
                </Nav.Link>
                <Nav.Link as={Link} to='/search'>
                    Search
                </Nav.Link>
                <Nav.Link as={Link} to='/about'>
                    About
                </Nav.Link>

            </Nav>
        </Navbar>
    );
};

export default Header;