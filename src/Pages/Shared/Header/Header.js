import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logos/logo.png'
import Loading from '../Loading/Loading';
import './Header.css'


const Header = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='py-0 saif' sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to="/" href="#home"><img height={70} width={80} src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/" href="#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/inventories" href="#inventories">Inventories</Nav.Link>
                        <Nav.Link as={Link} to="/about-us" href="#about-us">About Us</Nav.Link>
                        {/* <Nav.Link as={Link} to="/brands" href="#brands">Brands</Nav.Link> */}
                        <NavDropdown title="Brands" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Dell</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">HP</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">lenovo</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Asus</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Chuwi</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {
                            user && <><Nav.Link as={Link} to="/manageInventories" href="#manageInventories"><small>Manage Inventories</small></Nav.Link>
                                <Nav.Link as={Link} to="/AddInventory" href="#AddInventory"><small>Add Inventory</small></Nav.Link>
                                <Nav.Link as={Link} to="/myItems" href="#AddInventory"><small>My Items</small></Nav.Link>
                            </>
                        }
                        {
                            user ? <Button className='px-4 fs-6 ' onClick={() => signOut(auth)} as={Link} to="/login" variant="outline-secondary">Logout</Button>
                                : <Button className='px-4 fs-6' as={Link} to="/login" variant="outline-secondary">Login</Button>
                        }
                        {user || <><Button className='px-4 fs-6 mx-2' as={Link} to="/signup" variant="outline-secondary">SignUp</Button></>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;