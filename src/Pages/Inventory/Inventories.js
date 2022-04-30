import React from 'react';
import useProducts from '../../Hooks/useProducts';
import './Inventories.css';
import InventoriesDetails from './InventoriesDetails';

const Inventories = () => {
    const [products] = useProducts()

    return (
        <div>

            <div className='inventory-container mx-4 my-1'>
                {
                    products.map(pd =>
                        <InventoriesDetails key={pd.id} product={pd}></InventoriesDetails>
                    )
                }
            </div>
        </div>
    );
};

export default Inventories;