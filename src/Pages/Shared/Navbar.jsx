import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { authcontext } from '../../Provider/Authprovider';
import Swal from 'sweetalert2';

const Navbar = () => {
  const {user,signout}=useContext(authcontext)
    const links=<>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/tutions'}>Tution jobs</NavLink></li>
    <li><NavLink>Candidate</NavLink></li>
    <li><NavLink>Blog</NavLink></li>
    </>
    const handlelogout=()=>{
 signout();
  Swal.fire({
                title: "LogOut Successfully",
                icon: "success",
                showConfirmButton:false,
                timer:1000,
                });
  }
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl">BD Tutor</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <div className="hidden lg:flex gap-4">
<button className="btn btn-link text-xl"><NavLink to={'/register'}>Register</NavLink></button>
 {user ? 
         <button  onClick={handlelogout} className="btn text-white bg-[#3c65f5] px-6 py-6 text-base hover:bg-[#212529]"><NavLink>Sign Out</NavLink></button>
     : 
      <button className="btn text-white bg-[#3c65f5] px-6 py-6 text-base hover:bg-[#212529]"><NavLink to={'/login'}>Sign In</NavLink></button>
    }
    </div>
    <div className="dropdown dropdown-end lg:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-44 p-2 shadow">
        {links}
       <li> <NavLink to={'/register'}>Register</NavLink></li>
       {user ? 
        <li onClick={handlelogout}><NavLink>Sign Out</NavLink></li>
     : 
      <li><NavLink to={'/login'}>Sign In</NavLink></li>
    }
      
      </ul>
    </div>
  </div>
</div>
    );
};

export default Navbar;