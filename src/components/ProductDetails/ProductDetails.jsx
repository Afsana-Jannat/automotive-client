// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const ProductDetails = () => {
//     const product = useLoaderData() || {};
//     console.log(product);

//     return (
//         <div>
//            <h2>brand: </h2>
//         </div>
//     );
// };

// export default ProductDetails;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';

const ProductDetails = () => {
    const data = useParams();
    console.log(data);

    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://automotive-server-phi.vercel.app/details/${data.id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[data.id])

    console.log(product);

    const {_id, image,name,price,brand,description} = product || {}

    return (
        <div>
            <Navbar></Navbar>

            <i className='text-5xl mt-6 text-purple-500 text-center'> {name} details</i>
            <div className='mt-6 md:ml-14'>
            <img src={image} alt="" />
            </div>
            <i className='text-2xl text-slate-500 ml-4'>{description}</i>
             
             <br />
             <br />
             <i className='font-extrabold ml-10
              text-purple-500'>Price: {price}</i>
              <br />
              <button className="btn btn-outline btn-secondary ml-12 mt-8">Add to cart</button>
        </div>
    );
};

export default ProductDetails;