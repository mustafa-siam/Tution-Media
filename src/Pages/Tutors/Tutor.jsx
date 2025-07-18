import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Tutor = ({tutor}) => {
    const {photourl,tutorName,education,location,studysubject}=tutor
    return (
        <div className="card bg-base-100 h-[500px]  shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={photourl}
      alt="tutor"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl font-bold capitalize">{tutorName}</h2>
    <p className='text-[#a0abb8] text-xl capitalize'>{education}</p>
    <h2 className="card-title text-xl font-medium capitalize">{studysubject}</h2>
    <button className='btn flex justify-center items-center'>
             <IoLocationSharp className='text-xl text-[#d92550]'></IoLocationSharp>
             <h3 className='text-xl font-bold capitalize'>{location}</h3>
              </button>
              <div className="card-actions w-full">
 <Link to={`/tutordetails/${tutor._id}`} className='w-full'>
          <button className="btn w-full bg-gradient-to-r from-[#540654] via-[#cc0d85] to-[#540654] text-white hover:scale-105 duration-300">
            View Details
          </button>
          </Link>
              </div>
    
  </div>
</div>
    );
};

export default Tutor;