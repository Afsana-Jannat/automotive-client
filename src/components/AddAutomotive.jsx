import Swal from 'sweetalert2'
import Navbar from './Navbar';

const AddAutomotive = () => {
    const handleAddAutomotive = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const image = form.image.value;
        const price = form.price.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const newAutomotive ={
            name,
            brand,
            image,
            price,
            type,
            rating,
            description
        }
        
        // send data to the server
        fetch('https://automotive-server-phi.vercel.app/automotive', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAutomotive)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added Successfully',
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
                <h2 className="text-3xl font-bold">Add automotive</h2>

                <form className="card-body" onSubmit={handleAddAutomotive}>
                    {/* // product name  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product namete</span>
                        </label>
                        <input type="text" placeholder="Product Name" required name='name' className="input input-bordered"  />
                    </div>
                    {/* Brand name  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <select className="select w-full max-w-xs" required name='brand'>
                            <option disabled selected>Select Brand</option>
                            <option value={'Mitsubishi'}>Mitsubishi</option>
                            <option value={'Toyota'}>Toyota</option>
                            <option value={'Hyundai'}>Hyundai</option>
                            <option value={'Volkswagen'}>Volkswagen</option>
                            <option value={'Mini'}>Mini</option>
                            <option value={'Kia'}>Kia</option>
                        </select>
                    </div>






                    {/*  Product Image */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <input type="text" placeholder="Product Image" required name='image' className="input input-bordered"  />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product type</span>
                        </label>
                        <select className="select w-full max-w-xs" required name='type'>
                            <option disabled selected>Select Product Type</option>
                            <option value={'Car'}>Car</option>
                            <option value={'Truck'}>Truck</option>
                            <option value={'Bike'}>Bike</option>
                        </select>                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <input type="text" placeholder="price" required name='price' className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">description</span>
                        </label>
                        <input type="text" placeholder="description" required name='description' className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">rating</span>
                        </label>
                        <input type="text" placeholder="rating" required name='rating' className="input input-bordered"  />
                    </div>




                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAutomotive;