import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: "400px" }} className='w-100 mx-auto text-center'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;