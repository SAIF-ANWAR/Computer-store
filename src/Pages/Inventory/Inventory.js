import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';

import './Inventories.css'

const Inventory = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [products] = useProducts()
    const [laptop, setLaptop] = useState({})

    useEffect(() => {
        const url = `https://still-bastion-50699.herokuapp.com/laptops/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLaptop(data))
    }, [id])

    let itemQuantity = parseFloat(laptop?.quantity)
    let quantityInEveryClick = itemQuantity - 1
    const handleDelivered = (id) => {
        const result = quantityInEveryClick--
        const quantity = result.toString()
        const outPut = { quantity }
        console.log(outPut)
        const url = `https://still-bastion-50699.herokuapp.com/laptops/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(outPut)
        })
            .then(res => res.json())
            .then(data => {
                let updatedProduct = products.find(product => product.quantity === laptop.quantity)
                updatedProduct.quantity = result.toString()
                setLaptop(updatedProduct)
                console.log(updatedProduct)
                console.log('success', data)
            })
    }

    const handleRestock = () => {
        const quantity = window.prompt("Enter the quantity", "")
        const output = { quantity }
        console.log(output)
        if (isNaN(quantity) === true) {
            window.alert("please enter value")
        }
        const url = `https://still-bastion-50699.herokuapp.com/laptops/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(output)
        })
            .then(res => res.json())
            .then(data => {
                let updatedProduct = products.find(product => product.quantity === laptop.quantity)
                updatedProduct.quantity = quantity
                setLaptop(updatedProduct)
                console.log('success', data)
            })
    }
    const handleManageInventories = () => {
        navigate('/manageInventories')
    }
    return (
        <div >
            <div className='product-info '>
                <div className="card text-center mb-3" >
                    <div className="row g-0">
                        <div className="col-md-6 col-sm-12">
                            <img src={laptop.img} className="img-fluid rounded-start  border-bottom" alt="..." />
                            <h3 className="card-title">{laptop.title}</h3>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="card-body mt-3">

                                <div className="card w-75 mx-auto text-start " style={{ "width": "18rem" }}>
                                    <div className="card-header">
                                        Name :  {laptop.title}
                                    </div>
                                    <div className="card-header">
                                        Supplied By :  {laptop.Supplier}
                                    </div>
                                    <div className="card-header">
                                        Description :
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"> <small>Model: {laptop.description?.model} </small>  </li>
                                        <li className="list-group-item"> <small>Processor: {laptop.description?.processor}  </small> </li>
                                        <li className="list-group-item"> <small> Memory: {laptop.description?.memory}  </small></li>
                                        <li className="list-group-item"> <small> Storage: {laptop.description?.storage}  </small></li>
                                        <li className="list-group-item"> <small>Display: {laptop.description?.display} </small>  </li>
                                    </ul>
                                    <div className="card-header">
                                        Price : $ {laptop.price}
                                    </div>
                                    <div className="card-header">
                                        Quantity :  {laptop.quantity}
                                    </div>
                                    <div className="card-header">
                                        <Button onClick={() => handleDelivered(laptop._id)} variant='outline-primary'>Delivered</Button>
                                        <Button onClick={handleRestock} variant='outline-primary px-3 mx-3'>Restock</Button>
                                    </div>
                                </div>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Button className='d-flex mx-auto' onClick={handleManageInventories} variant='outline-primary'> Manage Inventories</Button>
        </div >
    );
};

export default Inventory;