import React from 'react';
import { Button } from 'react-bootstrap';
import './Inventories.css'

const Inventory = ({ product }) => {
    console.log(product)
    return (
        <div className='cotnainer'>
            <div className='container border-0  shadow py-2 px-3'>
                <div className='product-image'>
                    <img className='rounded mx-auto d-block img-fluid' src={product?.img} alt="" />
                </div>
                <div className='pb-3'>
                    <span className='fw-bolder'> {product?.title}</span> <br />
                    <span>By  <span className='fst-italic'>{product?.Supplier}</span></span>
                </div>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <div>
                        <small>Price: $ {product?.price}</small> <br />
                        <small>Quantity: {product?.quantity}</small>
                    </div>
                    <div>
                        <Button className='px-3' variant="outline-primary">Manage</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;