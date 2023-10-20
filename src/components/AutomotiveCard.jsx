
// import Swal from "sweetalert2";

import { Link } from "react-router-dom";


const AutomotiveCard = ({ automotive }) => {

    const { _id, brand, image} = automotive;

 
    return (
        <>
        <Link to={`brands/${brand}`}>
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Brand: {brand}</h2>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
        </Link>
        </>
    );
};

export default AutomotiveCard;