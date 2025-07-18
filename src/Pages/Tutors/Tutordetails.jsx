import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  FaUserGraduate, FaPhoneAlt, FaBookOpen, FaMapMarkerAlt, FaClock,
  FaEnvelope, FaTransgender, FaCalendarAlt, FaChalkboardTeacher
} from 'react-icons/fa';

const Tutordetails = () => {
  const tutor = useLoaderData();
  const {
    tutorName, phone, education, studysubject, preferredClass, tutionexperty,
    medium, gender, time, location, email, bio, photourl, createdAt
  } = tutor;

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-12">
      {/* Profile section */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img src={photourl} alt="Tutor" className="rounded-full w-40 h-40 object-cover shadow-md" />
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold capitalize">{tutorName}</h2>
          <p className="text-gray-600">{bio}</p>
        </div>
      </div>

      {/* Details section */}
      <div>
        <h2 className="text-3xl font-semibold text-center mb-6">Tutor Details</h2>
        <div className="grid md:grid-cols-2 gap-6 text-lg bg-white p-6 rounded-xl shadow-md">
          <p className="flex items-center gap-2"><FaBookOpen className="text-[#6c2a8c]" /> <span className="font-semibold">Subject:</span> {studysubject}</p>
          <p className="flex items-center gap-2"><FaUserGraduate className="text-[#6c2a8c]" /> <span className="font-semibold">University:</span> {education}</p>
          <p className="flex items-center gap-2"><FaChalkboardTeacher className="text-[#6c2a8c]" /> <span className="font-semibold">Expertise:</span> {tutionexperty}</p>
          <p className="flex items-center gap-2"><FaBookOpen className="text-[#6c2a8c]" /> <span className="font-semibold">Tution Level:</span>cls {preferredClass}</p>
          <p className="flex items-center gap-2"><FaBookOpen className="text-[#6c2a8c]" /> <span className="font-semibold">Medium:</span> {medium}</p>
          <p className="flex items-center gap-2"><FaClock className="text-[#6c2a8c]" /> <span className="font-semibold">Time:</span> {time}</p>
          <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#6c2a8c]" /> <span className="font-semibold">Location:</span> {location}</p>
          <p className="flex items-center gap-2"><FaPhoneAlt className="text-[#6c2a8c]" /> <span className="font-semibold">Phone:</span> {phone}</p>
          <p className="flex items-center gap-2"><FaEnvelope className="text-[#6c2a8c]" /> <span className="font-semibold">Email:</span> {email}</p>
          <p className="flex items-center gap-2"><FaTransgender className="text-[#6c2a8c]" /> <span className="font-semibold">Gender:</span> {gender}</p>
          <p className="flex items-center gap-2"><FaCalendarAlt className="text-[#6c2a8c]" /> <span className="font-semibold">Joined:</span> {createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default Tutordetails;
