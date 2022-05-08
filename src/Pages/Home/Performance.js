import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Home.css'


const Performance = () => {
    return (
        <div className='container mb-5'>
            <div className='row gx-4 mt-2 mb-3 py-4 shadow-sm'>
                <div className='col-md-6 p-3 '>
                    <div id='performance' className={`text-dark d-flex justify-content-start aligh-items-center px-2 border-0 shadow-lg performance`}>
                        <img style={{ height: "100px" }} width={100} src={logo} alt="" />
                        <div className='d-flex flex-column justify-content-start py-5 px-3'>
                            <span className='fs-4 fw-normal pb-1'>Discover best rated items</span>
                            <Link to="/" className="text-dark fw-normal" href="#" >Browse now</Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 p-3 '>
                    <div id='performance-2' className={`text-dark d-flex justify-content-start aligh-items-center px-2 shadow-lg performance-2`}>
                        <img style={{ height: "100px" }} width={100} src={logo} alt="" />
                        <div className='d-flex flex-column justify-content-start py-5 px-3'>
                            <span className='fs-4 fw-normal pb-1'>Discover best selling items</span>
                            <Link style={{ color: "#959599" }} className='fw-normal' to="/" href="#">Browse now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Performance;