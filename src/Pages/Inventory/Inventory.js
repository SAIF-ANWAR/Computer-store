import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import './Inventories.css'

const Inventory = () => {
    const { id } = useParams()
    const [laptop, setLaptop] = useState({})
    console.log(laptop)
    useEffect(() => {
        const url = `http://localhost:5000/laptops/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLaptop(data))
    }, [id])

    return (
        <div >
            <div className='product-info'>
                <div class="card text-center mb-3" style={{ "max- width": "540px" }}>
                    <div class="row g-0">
                        <div class="col-md-6">
                            <img src={laptop.img} class="img-fluid rounded-start" alt="..." />

                        </div>
                        <div class="col-md-6">
                            <div class="card-body mt-3">
                                <h3 class="card-title pb-2">Item: {laptop.title}</h3>
                                <div class="card w-75 mx-auto text-start " style={{ "width": "18rem" }}>
                                    <div class="card-header">
                                        Supplied By :  {laptop.Supplier}
                                    </div>
                                    <div class="card-header">
                                        Description :
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item"> <small>Model: {laptop.description?.model} </small>  </li>
                                        <li class="list-group-item"> <small>Processor: {laptop.description?.processor}  </small> </li>
                                        <li class="list-group-item"> <small> Memory: {laptop.description?.memory}  </small></li>
                                        <li class="list-group-item"> <small> Storage: {laptop.description?.storage}  </small></li>
                                        <li class="list-group-item"> <small>Display: {laptop.description?.display} </small>  </li>
                                    </ul>
                                    <div class="card-header">
                                        Price : $ {laptop.price}
                                    </div>
                                    <div class="card-header">
                                        Quantity :  {laptop.quantity}
                                    </div>
                                </div>
                                {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='cotnainer  p-5 table-responsive-sm'>
                <Table className='table table-bordered  align-middle' responsive="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Supplied By</th>
                            <th>Delivered?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td><Button variant="outline-primary">Delivered</Button></td>
                        </tr>

                    </tbody>
                </Table>
            </div> */}
        </div >
    );
};

export default Inventory;