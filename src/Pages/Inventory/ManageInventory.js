import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';

const ManageInventory = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useProducts()
    const handleAddInventory = () => {
        navigate('/AddInventory')
    }
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/laptops/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining)
                })
        }
    }
    return (
        <div>
            <div className='cotnainer  p-5 table-responsive-sm'>
                <Table className='table table-bordered  align-middle' responsive="sm">
                    <thead>
                        <tr>
                            {/* <th>ID</th> */}
                            <th>Name</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            {/* <th>Supplied By</th> */}
                            <th>Remove Item?</th>
                        </tr>
                    </thead>
                    {
                        products.map(product => <>
                            <tbody>
                                <tr>
                                    {/* <td>{product._id}</td> */}
                                    <td>{product?.title}</td>
                                    <td>{product.description?.model}</td>
                                    <td>{product?.price}</td>
                                    <td>{product?.quantity}</td>
                                    {/* <td>Table cell</td> */}
                                    <td><Button onClick={() => handleDelete(product._id)} variant="outline-danger">Delete</Button>
                                        <Button onClick={handleAddInventory} variant="outline-success">Add New Item</Button>
                                    </td>

                                </tr>

                            </tbody>
                        </>
                        )
                    }
                </Table>

                {/* <Button>Add new Item</Button> */}

            </div>
        </div >
    );
};

export default ManageInventory;