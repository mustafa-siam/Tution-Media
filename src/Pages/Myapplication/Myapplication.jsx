
import React, { useContext, useEffect, useState } from 'react';
import { authcontext } from '../../Provider/Authprovider';
import axios from 'axios';
import useAxiosSecure from '../Hooks/useAxiossecure';

const Myapplication = () => {
    const [myapplies,setmyapplies]=useState([]);
    const axiossecure=useAxiosSecure()
    const {user}=useContext(authcontext)
    useEffect(()=>{
      if (!user?.email) return;
        // fetch(`http://localhost:5000/applications/${user.email}`)
        // .then(res=>res.json())
        // .then(data=>setmyapplies(data))
        // axios.get(`http://localhost:5000/applications/${user?.email}`,{withCredentials:true})
        axiossecure.get(`applications/${user?.email}`)
        .then(res=>{
            setmyapplies(res.data)
            console.log(res.data)
        })
    },[axiossecure,user?.email])
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Tution Id</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {myapplies.map((myapply,idx)=> <tr key={myapply._id} className="hover:bg-base-300">
        <th>{idx+1}</th>
        <td>{myapply.name}</td>
        <td>{parseInt(myapply.tutionId.slice(-4),16)}</td>
        <td>Blue</td>
      </tr>)}

     
     
    </tbody>
  </table>
</div>
    );
};

export default Myapplication;