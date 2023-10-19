import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Navbar = () => {

  const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/addAutomotive">Add Automotive</NavLink></li>
    <li><NavLink to="/updateAutomotive">Update Automotive</NavLink></li>
    <li><NavLink to="/users">Users</NavLink></li>
  </>

  const { user, logOut } = useAuth();

  return (

    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <div className="mr-6">
          <img className="w-18 h-16" src="https://i.ibb.co/SV6n6rt/8b8cdc04e2d7f55149dd7825b489ad9e.jpg" alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end mr-6">

        {
          user?.email ? <div className="dropdown 
          dropdown-end">
            <label tabIndex={0} className="btn btn-ghost
             btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm 
      dropdown-content mt-3 z-[1] p-2 shadow 
      bg-base-100 rounded-box w-52">
              <li>
                <button className="btn btn-sm btn-ghost">
                  {user.displayName}
                </button>
              </li>
              <li>
                <button
                onClick={logOut}
                className="btn btn-sm btn-ghost">
                  Logout
                </button>
              </li>
            </ul>
          </div>
          :
              <button><NavLink to="/login">Login</NavLink></button>
        }

      </div>
    </div>
  );
};

export default Navbar;