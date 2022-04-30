import React from 'react';
import { Button } from 'react-bootstrap';
import google from '../../../images/google.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='w-75 mt-4 mx-auto'>
                <div className='d-flex align-items-center w-100'>
                    <div style={{ height: '1px' }} className="bg-primary w-100 " ></div>
                    <div className='px-3'>Or</div>
                    <div style={{ height: '1px' }} className="bg-primary w-100" ></div>
                </div>
                <div className='mt-4'>
                    <Button variant="outline-primary" className='d-block mx-auto mt-2 '>
                        <img className='px-1' width={"30px"} src={google} alt="" />
                        Sign in with Google</Button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;