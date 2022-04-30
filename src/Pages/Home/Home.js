import React, { useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';
import banner1 from '../../images/banner/banner1.jpg';
import banner2 from '../../images/banner/banner2.jpg';
import banner3 from '../../images/banner/banner3.jpg';
import Inventories from '../Inventory/Inventories';
import Inventory from '../Inventory/Inventory';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useProducts()
    return (
        <div>
            <div >
                <Carousel fade>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={800}>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='title-header my-2'>
                <p className='title-product text-center fs-2 '>Items</p>
            </div>
            <div className='product-home container'>

                {
                    products.slice(0, 6).map(product => <div className='container border border-light rounded shadow-sm py-2 px-3'>
                        <div className='product-image'>
                            <img className='rounded mx-auto d-block img-fluid' src={product?.img} alt="" />
                        </div>
                        <div className='pb-3 px-3'>
                            <span className='fw-bolder'> {product?.title}</span> <br />
                            <span>By  <span className='fst-italic'>{product?.Supplier}</span></span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mb-3 px-3'>
                            <div>
                                <small>Price: $ {product?.price}</small> <br />
                                <small>Quantity: {product?.quantity}</small>
                            </div>
                            <div>
                                <Button className='px-3' variant="outline-primary">Manage</Button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;