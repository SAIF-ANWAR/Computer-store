import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#F5F5F7" }}>
            <div className="container">
                <div className="row row-cols-4 align-items-center p-5 gx-5">
                    <div className="col-md-3"><p className='text-primary fs-3 fw-bold'>Computer Store </p>
                        <small>  Location: Dhaka, Bangladesh <br />
                            Email: saifanwar5123@gmail.com <br />
                            Phone: 01777777777</small>
                    </div>
                    <div className="col-md-3 mt-3 "><p className='text-dark fw-bold'>About Computer Store </p>
                        <small>
                            <a className='text-decoration-none text-dark' href="#">Who we are</a> <br />
                            <a className='text-decoration-none text-dark' href="">Careers</a>  <br />
                            <a className='text-decoration-none text-dark' href="">Company History</a> <br />
                            <a className='text-decoration-none text-dark' href="">Partners</a>
                        </small>
                    </div>
                    <div className="col-md-3 mt-3 "><p className='text-dark fw-bold'>Customer Service </p>
                        <small>
                            <a className='text-decoration-none text-dark' href="#">Payment</a> <br />
                            <a className='text-decoration-none text-dark' href="">feedBack</a>  <br />
                            <a className='text-decoration-none text-dark' href="">FAQ</a> <br />
                            <a className='text-decoration-none text-dark' href="">Contact Us</a>
                        </small>
                    </div>
                    <div className="col-md-3 mt-3 "><p className='text-dark fw-bold'>Location </p>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;