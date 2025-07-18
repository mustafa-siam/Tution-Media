import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
const Tutiondetails = () => {
    const tutionloader=useLoaderData()
    console.log(tutionloader)
     const {subject,class: studentClass,location,mode,salary,daysPerWeek,preferredTutor,medium,_id} = tutionloader;
    return (
         <div className="card bg-base-100 w-full  shadow-md rounded-xl border border-gray-200 ">
      <div className="card-body p-6 space-y-4">
        
          <h2 className=" text-4xl font-bold text-center">Tutor Needed for {medium}</h2>
          <div className='w-full flex flex-col justify-center items-center'>
         <IoLocationSharp className='text-4xl text-[#d92550]'></IoLocationSharp>
         <h3 className='text-2xl font-bold'>{location}</h3>
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center text-gray-700">
            <div className="bg-gray-50 p-4 rounded shadow-sm">
    <p className="text-sm font-semibold text-gray-500">Tutoring Type</p>
    <p className="text-lg font-medium">{mode}</p>
  </div>
  <div className="bg-gray-50 p-4 rounded shadow-sm">
    <p className="text-sm font-semibold text-gray-500">Student Class</p>
    <p className="text-lg font-medium">{studentClass}</p>
  </div>
  <div className="bg-gray-50 p-4 rounded shadow-sm">
    <p className="text-sm font-semibold text-gray-500">Subject</p>
    <p className="text-lg font-medium">{subject}</p>
  </div>
  <div className="bg-gray-50 p-4 rounded shadow-sm">
    <p className="text-sm font-semibold text-gray-500">Location</p>
    <p className="text-lg font-medium">{location}</p>
  </div>
  <div className="bg-gray-50 p-4 rounded shadow-sm">
    <p className="text-sm font-semibold text-gray-500">Preferred Tutor</p>
    <p className="text-lg font-medium">{preferredTutor}</p>
  </div>
  <div className="bg-gray-50 p-4 rounded shadow-sm">
    <p className="text-sm font-semibold text-gray-500">Tutoring Days</p>
    <p className="text-lg font-medium">{daysPerWeek} days/week</p>
  </div>
  <div className="bg-gray-50 p-4 rounded shadow-sm col-span-1 sm:col-span-2 md:col-span-3">
    <p className="text-sm font-semibold text-gray-500">Salary</p>
    <p className="text-xl text-blue-600 font-bold">{salary} BDT</p>
  </div>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/apply/${_id}`}>
           <button className="btn btn-outline btn-secondary text-lg">Apply for This Tuition</button>
          </Link>       
        </div>
      </div>
    </div>
    );
};

export default Tutiondetails;