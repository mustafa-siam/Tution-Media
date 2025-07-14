import React from 'react';

const Tutioncard = ({tution}) => {
    const {title,subject,class: studentClass,location,mode,salary,daysPerWeek,preferredTutor,status} = tution;
   return (
    <div className="card bg-base-100 w-full max-w-md shadow-md rounded-xl border border-gray-200">
      <div className="card-body p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="card-title text-xl font-semibold text-gray-800">{title}</h2>
          <span className="text-sm bg-fuchsia-600 font-semibold rounded-md shadow px-3 py-1 text-white">
            {status}
          </span>
        </div>
        <div>
          <p className="text-base font-medium text-gray-700">{mode}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center text-gray-700">
          <p>
            <span className="font-bold text-sm">Student Cls</span><br />
            {studentClass}
          </p>
          <p>
            <span className="font-bold text-sm ">Subject</span><br />
            {subject}
          </p>
          <p>
            <span className="font-bold text-sm">Location</span><br />
            {location}
          </p>
          <p>
            <span className="font-bold text-sm">Preferred Tutor</span><br />
            {preferredTutor}
          </p>
          <p>
            <span className="font-bold text-sm">Tutoring Days</span><br />
            {daysPerWeek} days/week
          </p>
          <p>
            <span className="font-bold text-sm">Salary</span><br />
            <span className="text-blue-600 text-lg font-semibold">{salary}</span>
          </p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn bg-gradient-to-r from-[#540654] via-[#cc0d85] to-[#540654] text-white hover:scale-105 duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutioncard;