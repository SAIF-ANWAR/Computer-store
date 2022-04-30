import React from 'react';
import useProducts from '../../Hooks/useProducts';

const Inventories = () => {
    const [products, setProducts] = useProducts()


    return (
        <div>
            <h1>Inventories: {products.length}</h1>
        </div>
    );
};

export default Inventories;