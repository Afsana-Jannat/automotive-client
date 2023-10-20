import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Products from './Products';
import BrandSlider from './BrandSlider';

const BrandDetails = () => {
    const {brandName} = useParams();
    const products = useLoaderData() || [];

    return (
        <>
        <Navbar/>
            <BrandSlider brandName={brandName}/>

            <br />
            <hr />
            <h1 className="text-4xl">
                {brandName}'s Products
            </h1>
            <div className="2xl:container mx-auto">

            <Products products={products} />
            </div>
        </>
    );
};

export default BrandDetails;