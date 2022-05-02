import React from 'react';

const Footer = () => {
    return (
        <div class="container">
            <div style={{ backgroundColor: "#F5F5F7" }} class="row row-cols-3 align-items-center ">
                <div class="col-md-4"><p>Computer Store </p>
                    <small>  Location: Dhaka, Bangladesh <br />
                        Email: saifanwar5123@gmail.com <br />
                        Phone: 01777777777</small>
                </div>
                <div class="col-md-4"><p>About Us </p>
                    <small>  <a href="">Who we are</a> <br />
                        <a href="">Careers</a>  <br />
                        <a href="">Company History</a> <br />
                        <a href="">Partners</a> </small>
                </div>
                <div class="col-md-4"><p>Column</p></div>
            </div>
        </div>

    );
};

export default Footer;