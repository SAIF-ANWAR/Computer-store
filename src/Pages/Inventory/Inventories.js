import useProducts from '../../Hooks/useProducts';
import './Inventories.css';
import InventoriesDetails from './InventoriesDetails';

const Inventories = () => {
    const [products] = useProducts()
    return (
        <div>
            <div className='title-header'>
                <h1 style={{ color: "#21768d" }} className='title-inventory text-center py-1 mt-2 mb-4'>All Items</h1>
            </div>
            <div className='inventory-container mx-4 my-1'>
                {
                    products?.map(pd =>
                        <InventoriesDetails key={pd._id} product={pd}></InventoriesDetails>
                    )
                }


            </div>
        </div>
    );
};

export default Inventories;