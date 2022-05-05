import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProducts from '../../Hooks/useProducts';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [products] = useProducts()
    const [myItems, setMyItems] = useState([])
    console.log(myItems)
    useEffect(() => {
        const myCollection = products.filter(product => product?.email === user?.email)
        if (myCollection) {
            setMyItems(myCollection)
        }
    }, [products, user?.email])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `https://still-bastion-50699.herokuapp.com/laptops/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = myItems.filter(product => product._id !== id)
                    setMyItems(remaining)
                })
        }
    }

    return (
        <div className='container p-5'>
            <h2>Products Added By {user?.email} </h2>
            <Table className='table table-bordered  align-middle' responsive="sm">
                <thead >
                    <tr>
                        <th>Model No</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Supplier</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                {
                    myItems.map(item =>
                        <tbody key={item._id}>
                            <tr>
                                <td>{item?.title}</td>
                                <td>$ {item?.price}</td>
                                <td>{item?.quantity}</td>
                                <td>{item?.Supplier}</td>
                                <td className='d-flex mx-auto w-75  border-0' >
                                    <Button onClick={() => handleDelete(item._id)} variant="outline-danger">Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    )
                }

            </Table>
        </div>
    );
};

export default MyItems;