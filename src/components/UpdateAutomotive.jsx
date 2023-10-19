import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "./Navbar";


const UpdateAutomotive = () => {

    const automotive = useLoaderData();
    

    const { _id, name, brand, type, price, image, description,rating } = automotive;
    console.log(automotive);

    const handleUpdateAutomotive = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const updatedAutomotive = { name, brand, type, price, image, description, rating }
        console.log(updatedAutomotive)

        // send data to the server
        fetch(`http://localhost:5000/automotive/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedAutomotive)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Automotive Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#e2e8f0] p-24">
                <h2 className="text-3xl font-bold">Update automotive: {name}</h2>
                <form onSubmit={handleUpdateAutomotive}>
                    {/* form row */}
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <span>Name</span>
                                <input type="text" name="name"
                                    defaultValue={name}
                                    placeholder="Name"
                                    className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <span>Brand</span>
                                <select className="select w-full max-w-xs" required name='brand' defaultValue={brand}>
                                    <option disabled selected>Select Brand</option>
                                    <option value={'Mitsubishi'}>Mitsubishi</option>
                                    <option value={'Toyota'}>Toyota</option>
                                    <option value={'Hyundai'}>Hyundai</option>
                                    <option value={'Volkswagen'}>Volkswagen</option>
                                    <option value={'Mini'}>Mini</option>
                                    <option value={'Kia'}>Kia</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <span>Type</span>
                                <select className="select w-full max-w-xs" required name='type' defaultValue={type}>
                            <option disabled selected>Select Product Type</option>
                            <option value={'Car'}>Car</option>
                            <option value={'Truck'}>Truck</option>
                            <option value={'Bike'}>Bike</option>
                        </select> 
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Prices</span>
                            </label>
                            <label className="input-group">
                                <span>Prices</span>
                                <input type="text" name="price" defaultValue={price}
                                    placeholder="Prices" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <span>Image</span>
                                <input type="text" name="image" defaultValue={image}
                                    placeholder="Image"
                                    className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <span>Description</span>
                                <input type="text" name="description"
                                    defaultValue={description}
                                    placeholder="Short Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <span>Rating</span>
                                <input type="text" name="rating" defaultValue={rating}
                                    placeholder="Rating"
                                    className="input w-full input-bordered" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Automotive" className="bg-gray-500 text-white btn btn-block" />
                </form>
            </div>
        </div>
    );
};

export default UpdateAutomotive;