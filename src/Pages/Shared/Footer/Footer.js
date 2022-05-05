import React from 'react';
import fb from '../../../images/social/fb.png';
import insta from '../../../images/social/insta.png'
import twitter from '../../../images/social/twiter.png'
const Footer = () => {
    return (
        <div style={{ backgroundColor: "#F5F5F7" }}>
            <div className="container">
                <div className="row row-cols-4 align-items-center p-4 gx-5">
                    <div className="col-md-3"><p className='text-primary fs-3 fw-bold'>Computer Store </p>
                        <small>  Location: Dhaka, Bangladesh <br />
                            Email: saifanwar5123@gmail.com <br />
                            Phone: 01777777777</small>
                    </div>
                    <div className="col-md-3 mt-3"><p className='text-dark fw-bold  text-center'>About Computer Store </p>
                        <small>
                            <a className='text-decoration-none text-dark mx-5' href="/">Who we are</a> <br />
                            <a className='text-decoration-none text-dark mx-5' href="/">Careers</a>  <br />
                            <a className='text-decoration-none text-dark mx-5' href="/">Company History</a> <br />
                            <a className='text-decoration-none text-dark mx-5' href="/">Partners</a>
                        </small>
                    </div>
                    <div className="col-md-3 mt-3 "><p className='text-dark fw-bold text-center'>Customer Service </p>
                        <small className='text-center'>
                            <a className='text-decoration-none text-dark mx-5' href="/">Payment</a> <br />
                            <a className='text-decoration-none text-dark  mx-5' href="/">feedBack</a>  <br />
                            <a className='text-decoration-none text-dark  mx-5' href="/">FAQ</a> <br />
                            <a className='text-decoration-none text-dark  mx-5' href="/">Contact Us</a>
                        </small>
                    </div>
                    <div className="col-md-3 "><p className='text-dark fw-bold text-center'>Find us on </p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img height={'40px'} className='px-2' src={fb} alt="" />
                            <img className='w-25 px-1' src={insta} alt="" />
                            <img className='w-25' src={twitter} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;