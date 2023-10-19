import Swal from 'sweetalert2'
import Navbar from './Navbar';

const AddAutomotive = () => {
    const handleAddAutomotive = event =>{
        event.preventDefault();

        const form = event.target;
        const brand = form.brand.value;
        const image = form.image.value;

        const newAutomotive = {brand,image}
        console.log(newAutomotive)

        // send data to the server
        fetch('http://localhost:5000/automotive', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAutomotive)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
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
            <form onSubmit={handleAddAutomotive}>
                {/* form row */}
                <div className="mt-8 mb-6">
                   
                    <div className="form-control md:w-full ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <span>Brand</span>
                            <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className="mb-6">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">
                            <span>Image</span>
                            <input type="text" name="image"
                            placeholder="Image" 
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

export default AddAutomotive;