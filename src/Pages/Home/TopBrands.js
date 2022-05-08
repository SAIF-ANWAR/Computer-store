import React from 'react';
import asus from '../../images/brands/asus.png'
import avita from '../../images/brands/avita.png'
import lenovo from '../../images/brands/lenovo.png'
import dell from '../../images/brands/dell.png'
import chuwi from '../../images/brands/chuwi.png'
import hp from '../../images/brands/hp.png'


const TopBrands = () => {
    return (
        <div className=' container mb-4 mt-2'>
            <div className='title-header mb-5'>
                <p className='topBrnads d-block text-center fs-2 pb-2 pt-4'>Top Brands</p>
            </div>

            <div className="container shadow-sm mb-5">
                <div className="row row-cols-6 align-items-center  brands bg-light">
                    <div className="col-md-2 col-4 align"><img className='img-fluid' src={asus} alt="asus-logo" /></div>
                    <div className="col-md-2 col-4"><img className='img-fluid' src={avita} alt="avita-logo" /></div>
                    <div className="col-md-2 col-4"><img className='img-fluid' src={lenovo} alt="lenovo-logo" /></div>
                    <div className="col-md-2 col-4 "><img style={{ height: "150px" }} className='img-fluid mx-3 rounded' src={dell} alt="dell-logo" /></div>
                    <div className="col-md-2 col-4"><img className='img-fluid' src={chuwi} alt="chuwi-logo" /></div>
                    <div className="col-md-2 col-4"><img className='img-fluid' src={hp} alt="hp-logo" /></div>
                </div>
            </div>
        </div>
    );
};

export default TopBrands;