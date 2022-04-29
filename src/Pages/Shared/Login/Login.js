import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import login from '../../../images/login.jpg';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12  '>
                    <img className='mx-auto' src={login} alt="" />
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <div className='w-75 mx-auto '>
                        <Form className=' mt-3 '>
                            <h3 className='mb-3'>Please Log In</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <div className='d-flex justify-content-between px-1'>
                                <p>Don't have an account?</p>
                                <Link to="/signup">Create account</Link>
                            </div>

                            <Button variant="outline-primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;