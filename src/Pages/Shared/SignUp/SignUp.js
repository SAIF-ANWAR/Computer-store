import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './SignUp.css'

const SignUp = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (user) {
        navigate('/')
    }
    const handleSignUp = event => {
        event.preventDefault()
        const email = event.target.email?.value
        const password = event.target.password?.value
        const confirmPassword = event.target.confirmPassword?.value
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div>
            <div className=' box  mx-auto border p-4 mt-4 shadow'>
                <Form onSubmit={handleSignUp} className='form'>
                    <h3 className='signupTitle'>Create an account</h3>
                    <Form.Group className="mb-3" >
                        <Form.Control type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="email" type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name="cnfirmPassword" type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <div className='d-flex justify-content-between px-1 '>
                        <p className='title'>Already have an account?</p>
                        <Link to="/login">Please login</Link>
                    </div>
                    <Button className='d-flex mx-auto w-50 justify-content-center' variant="outline-primary" type="submit">
                        <span>Sign Up</span>
                    </Button>
                </Form>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default SignUp;