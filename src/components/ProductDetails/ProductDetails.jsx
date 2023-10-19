import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData() || {};
    console.log(product);
    return (
        <div>
            <h1 className="text-3xl">Details page</h1>
        </div>
    );
};

export default ProductDetails;