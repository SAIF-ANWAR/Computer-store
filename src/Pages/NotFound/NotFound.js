import React from 'react';
import errorPage from '../../images/error.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='img-fluid' src={errorPage} alt="" />
        </div>
    );
};

export default NotFound;