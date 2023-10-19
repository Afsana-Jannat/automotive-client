import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Products from './Products';

const BrandDetails = () => {
    const {brandName} = useParams();
    const products = useLoaderData() || [];

    return (
        <>
        <Navbar/>
            brand detail of {brandName}
            <h1 className="text-4xl">
                {brandName} slider here
            </h1>


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