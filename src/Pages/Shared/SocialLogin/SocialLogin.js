import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png'
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleGoogleLogin = () => {
        signInWithGoogle()
    }
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true })
    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='w-75 mt-4 mx-auto'>
                <div className='d-flex align-items-center w-100'>
                    <div style={{ height: '1px' }} className="bg-primary w-100 " ></div>
                    <div className='px-3'>Or</div>
                    <div style={{ height: '1px' }} className="bg-primary w-100" ></div>
                </div>
                <div className='mt-4'>
                    <Button onClick={handleGoogleLogin} variant="outline-primary" className='d-block mx-auto mt-2 '>
                        <img className='px-1' width={"30px"} src={google} alt="" />
                        Sign in with Google</Button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;