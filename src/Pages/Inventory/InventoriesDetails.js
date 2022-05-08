import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Inventories.css';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'

const InventoriesDetails = ({ product }) => {

    const navigate = useNavigate()

    const handleManageButton = id => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='cotnainer mt-2 mb-2'>
            <div className='item container border-0  shadow py-2 px-3'>
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
                        <Button className='px-2 d-flex justify-content-between align-items-center ' onClick={() => handleManageButton(product._id)} variant="outline-primary">Manage <ArrowNarrowRightIcon width={"25px"} className="mt-1 mx-2"></ArrowNarrowRightIcon> </Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default InventoriesDetails;