import React, { useContext } from 'react';
import { authcontext } from '../Provider/Authprovider';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
   const {user,loader}=useContext(authcontext);
   if(loader){
     return <span className="loading loading-spinner loading-xl"></span>
   }
   if(user){
    return children;
   }
   return <Navigate  to={'/login'}></Navigate>
};

export default Privateroute;