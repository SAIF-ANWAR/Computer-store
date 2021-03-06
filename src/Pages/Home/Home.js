import { Button, Carousel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import banner1 from '../../images/banner/banner1.jpg';
import banner2 from '../../images/banner/banner2.jpg';
import banner3 from '../../images/banner/banner3.jpg';
import Performance from './Performance';
import './Home.css';
import TopBrands from './TopBrands';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'



const Home = () => {
    const navigate = useNavigate()
    const [products] = useProducts()
    const handleManageInventories = () => {
        navigate('/manageInventories')
    }
    const handleManageButton = id => {
        navigate(`/inventory/${id}`)
    }
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
                <p className='title-product d-block text-center pb-2 pt-4'>Laptops</p>
            </div>
            <div className='container py-3'>
                <div className='product-home'>
                    {
                        products.slice(0, 6).map(product => <div key={product._id} className='item container border border-light rounded shadow-sm py-2 px-3'>
                            <div className='product-image'>
                                <img className='rounded mx-auto d-block img-fluid px-3' src={product?.img} alt="" />
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
                                    <Button onClick={() => handleManageButton(product._id)} className='px-2 d-flex justify-content-between align-items-center ' variant="outline-primary">Manage <ArrowNarrowRightIcon width={"25px"} className="mt-1 mx-2"></ArrowNarrowRightIcon> </Button>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
                <div className='d-flex justify-content-end'>
                    <Link to="/manageInventories" className=' mt-2 py-2 px-5 fs-5 btn btn-link text-decoration-none' onClick={handleManageInventories} variant='outline-primary'> Manage Inventories <ArrowNarrowRightIcon width={"25px"} className="mt-1 mx-2"></ArrowNarrowRightIcon> </Link>
                </div>
            </div>
            <TopBrands></TopBrands>
            <Performance></Performance>


        </div>
    );
};

export default Home;