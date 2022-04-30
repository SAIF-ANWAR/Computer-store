import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logos/logo.png'
import './Header.css'


const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='py-0 saif' sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to="/" href="#home"><img height={60} width={80} src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/" href="#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/inventories" href="#inventories">Inventories</Nav.Link>
                        <Nav.Link as={Link} to="/about-us" href="#about-us">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/brands" href="#brands">Brands</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        {
                            user ? <Button onClick={() => signOut(auth)} as={Link} to="/login" variant="outline-secondary">Sign Out</Button>
                                : <Button as={Link} to="/login" variant="outline-secondary">Login</Button>
                        }
                        {/* <button className='btn btn-light'>Login</button> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;