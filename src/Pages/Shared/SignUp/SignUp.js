import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './SignUp.css'

const SignUp = () => {
    const [updateProfile] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    if (user) {
        navigate('/')
    }
    if (loading) {
        return <Loading></Loading>
    }
    const handleSignUp = async (event) => {
        event.preventDefault()
        const name = event.target.name?.value
        const email = event.target.email?.value
        const password = event.target.password?.value
        const confirmPassword = event.target.confirmPassword?.value

        if (password !== confirmPassword) {
            toast("Password don't match")
        }
        else {
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name })
        }

    }
    return (
        <div>
            <div className=' box  mx-auto border p-4 mt-4 shadow mb-5'>
                <Form onSubmit={handleSignUp} className='form'>
                    <h3 style={{ color: "#5BC8E7" }} className='signupTitle'>Create an account</h3>
                    <Form.Group className="mb-3" >
                        <Form.Control name="name" type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="email" type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name="confirmPassword" type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <p className='text-danger'> {error?.message}</p>
                    <div className='d-flex justify-content-between px-1 '>
                        <p className='title'>Already have an account?</p>
                        <Link className='text-decoration-none' to="/login">Please login</Link>
                    </div>
                    <Button className='d-flex mx-auto w-50 justify-content-center mb-4 mt-2' variant="outline-primary" type="submit">
                        <span className='py-1'>Create Account</span>
                    </Button>
                </Form>
                <SocialLogin></SocialLogin>
                <ToastContainer></ToastContainer>
            </div>

        </div>
    );
};

export default SignUp;