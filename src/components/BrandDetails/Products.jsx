import { Link } from "react-router-dom";

const Products = ({ products }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                products?.map(item => <div key={item._id}>

                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={item?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="flex justify-between">
                            <h2 className="card-title">{item?.name}</h2>
                            <h1 className="card-title font-bold ">{item?.price}</h1>
                            </div>
                            <p>{item?.description}</p>
                            <div className="card-actions justify-between">
                                <Link to={`/update/${item._id}`}>
                                    <button className="btn btn-neutral btn-sm">Update</button>
                                </Link>
                                <Link to={`/details/${item._id}`}>
                                    <button className="btn btn-primary btn-sm">See Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            {
                products?.length===0 && <h2 className="text-2xl text-center ">
                    ❌ No available Products
                </h2>
            }

        </div>
    );
};

export default Products;