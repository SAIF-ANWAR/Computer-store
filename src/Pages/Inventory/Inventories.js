import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Inventory from './Inventory';
import './Inventories.css'
const Inventories = () => {
    const [products, setProducts] = useProducts()

    console.log(products)
    return (
        <div>

            <div className='inventory-container'>
                {
                    products.map(pd => <Inventory key={pd.id} product={pd}></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventories;