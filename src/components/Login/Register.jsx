import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import Navbar from "../Navbar";


const Register = () => {

    const {createUser} = useAuth();
    const handleSubmit = (event) => {
        event.preventDefault();

        // get field values
        const name = event.target.name.value;
        const email = event.target.email.value;
        const image = event.target.image.value;
        const password = event.target.password.value;
        

        // validation
        if (password.length < 6) {
            Swal.fire('Password must be at 6 characters');
            return;
        }

        // Check if the password contains at least one alphabet character (a-zA-Z)
        if (!/[a-zA-Z]/.test(password)) {
            return Swal.fire("password need at least 1 alphabet");
          }

          // Check if the password contains at least one symbol character
          if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            return Swal.fire("password need at least 1 symbol");
          }

        // creating a new user
        createUser(email, password)
        .then(res => console.log(res.user))
        .catch(error=>console.error(error))
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='text-center items-center'>
            <h2 className='text-3xl my-10'>Please Register</h2>
            
            <form onSubmit={handleSubmit} className="md:w-3/4 lg:1/2 mx-auto">
            <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Full name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image url</span>
                    </label>
                    <input type="text" name='image' placeholder="Image url" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button type="submit"
                    className="btn btn-outline 
                    btn-secondary">Register</button>
                </div>
                
            </form>
            <p className='mt-4 text-xl'>Do not have an account? 
            <Link
            className='text-blue-400 font-bold'
             to="/login">Login</Link></p>
            </div>
            <div className="text-center mt-6">
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;