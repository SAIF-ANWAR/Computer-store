import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Inventories.css'

const Inventory = () => {
    const { id } = useParams()

    return (
        <div >
            <div className='product-info'>
                <div></div>
                <div></div>
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
        </div>
    );
};

export default Inventory;