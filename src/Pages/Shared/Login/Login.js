import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import login from '../../../images/login.jpg';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
import Loading from '../Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [tokenUser] = useAuthState(auth)
    console.log(tokenUser?.email)
    const location = useLocation()
    const navigate = useNavigate()
    const emailRef = useRef('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (sending) {
        return <Loading></Loading>
    }
    if (loading) {
        return <Loading></Loading>
    }

    let from = location.state?.from?.pathname || "/";

    const handleLogin = async event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        await signInWithEmailAndPassword(email, password)

        const url = `http://localhost:5000/login`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                localStorage.setItem('accessToken', result.accessToken)
                navigate(from, { replace: true })
            })

    }
    const resetPassword = async (event) => {
        event.preventDefault()
        const email = emailRef.current?.value
        if (email) {
            await sendPasswordResetEmail(email)
            toast("Email Sent")
        }
        else {
            toast("Please Enter Your Email")
        }
    }

    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 '>
                    <img className='mx-auto' src={login} alt="" />
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <div className='w-75 mx-auto '>
                        <Form onSubmit={handleLogin} className=' mt-3 '>
                            <h3 style={{ color: "#5BC8E7" }} className='mb-4 fs-2 '>Please Log In</h3>
                            <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
                                <Form.Control className='py-2' ref={emailRef} name="email" type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className='py-2' name="password" type="password" placeholder="Password" />
                            </Form.Group>
                            <p className='text-danger'>{error?.message}</p>
                            <div className='d-flex justify-content-between px-1'>
                                <p>Forgot Password?</p>
                                <Link onClick={resetPassword} className="text-decoration-none" to="/login">Reset Password</Link>
                            </div>
                            <Button className="px-4 mb-4" variant="outline-primary" type="submit">
                                <span className='fs-6'>Login</span>
                            </Button>
                        </Form>
                    </div>
                    <SocialLogin></SocialLogin>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Login;