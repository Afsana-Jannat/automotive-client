import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";


const Users = () => {
    const loadedUsers = useLoaderData(); 
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = id =>{
        fetch(`https://automotive-server-phi.vercel.app/user/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
               console.log('deleted successfully');
               const remainingUsers = users.filter(user =>
                user._id !== id);
                setUsers(remainingUsers);
            }
        })
    }


    return (
        <div>
            <Navbar></Navbar>
            <h2>users: {loadedUsers.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Id</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        loadedUsers.map(user => <tr key={user._id}>
            <th>#</th>
            <td>{user._id}</td>
            <td>{user.email}</td>
            <td>
                <button
                onClick={() => handleDelete(user._id)} 
                className="btn">X</button>
            </td>
        </tr>)
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;