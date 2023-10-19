
// import Swal from "sweetalert2";


const AutomotiveCard = ({ automotive, setAutomotives, automotives }) => {

    const { _id, brand, image} = automotive;

    // const handleDelete = _id => {
    //     console.log(_id);
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {

    //             fetch(`http://localhost:5000/automotive/${_id}`,{
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire(
    //                             'Deleted!',
    //                             'Your automotive has been deleted.',
    //                             'success'
    //                         )
    //                         // const remaining = automotives.filter(automotive => automotive._id !== _id)
    //                         // setAutomotives(remaining);
    //                     }
    //                 })
    //         }
    //     })
    // }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Brand: {brand}</h2>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default AutomotiveCard;