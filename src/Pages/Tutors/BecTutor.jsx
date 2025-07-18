import React, { useContext } from 'react';
import { authcontext } from '../../Provider/Authprovider';
import axios from 'axios';
import Swal from 'sweetalert2';
import dayjs from 'dayjs'
const BecTutor = () => {
  const { user } = useContext(authcontext);

  const handleTutorSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const tutorName = form.tutorName.value;
    const phone = form.phone.value;
    const education = form.education.value;
    const studysubject = form.studysubject.value;
    const preferredClass = form.preferredClass.value;
    const medium = form.medium.value;
    const gender = form.gender.value;
    const time = form.time.value;
    const tutionexperty=form.tutionexperty.value;
    const location = form.location.value;
    const email = form.email.value;
    const bio = form.bio.value;
    const photourl=form.photourl.value;
    const tutorData = {
      tutorName,
      phone,
      education,
      studysubject,
      preferredClass,
      tutionexperty,
      medium,
      gender,
      time,           
      location,
      email,
      bio,photourl,
      createdAt: dayjs().format('YYYY-MM-DD')
    };

    try {
      const res = await axios.post('http://localhost:5000/tutors', tutorData);
      if (res.data.insertedId) {
        Swal.fire({
          title: 'Successfully Registered as Tutor',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        });
        form.reset();
      }
    } catch (error) {
      Swal.fire({
        title: 'Submission Failed',
        text: error.message,
        icon: 'error',
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">Become a Tutor</h1>
      <p className="text-center text-gray-600">
        Fill out the form to join our platform as a tutor. We will verify your profile before listing it publicly.
      </p>

      <form onSubmit={handleTutorSubmit} className="grid md:grid-cols-2 gap-6">
        <fieldset>
          <legend className="text-base">Full Name</legend>
          <input name="tutorName" type="text" className="input input-bordered w-full" placeholder="Your Full Name" required />
        </fieldset>

        <fieldset>
          <legend className="text-base">Phone Number</legend>
          <input name="phone" type="tel" className="input input-bordered w-full" placeholder="Phone Number" required />
        </fieldset>

        <fieldset>
          <legend className="text-base">University Name</legend>
          <input name="education" type="text" className="input input-bordered w-full" placeholder="University Name" required />
        </fieldset>

        <fieldset>
          <legend className="text-base">Study Subject</legend>
          <input name="studysubject" type="text" className="input input-bordered w-full" placeholder="Study of Subject" required />
        </fieldset>

        <fieldset>
          <legend className="text-base">Preferred Class Level</legend>
          <input name="preferredClass" type="text" className="input input-bordered w-full" placeholder="Preferred Class Level" required />
        </fieldset>

        <fieldset>
          <legend className="text-base">Medium</legend>
          <select name="medium" className="select w-full" required defaultValue="">
            <option disabled value="">Select Medium</option>
            <option>Bangla Medium</option>
            <option>English Medium</option>
            <option>Madrasa Medium</option>
          </select>
        </fieldset>

        <fieldset>
          <legend className="text-base">Gender</legend>
          <select name="gender" className="select w-full" required defaultValue="">
            <option disabled value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </fieldset>

        <fieldset>
          <legend className="text-base">Preferred Tutoring Time</legend>
          <select name="time" className="select w-full" required>
            <option disabled value="">Select Time</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </fieldset>
<fieldset >
          <legend className="text-base">Tution Experty Sub</legend>
          <input name="tutionexperty" type="text" className="input input-bordered w-full" placeholder="Enter Subject Name" required />
        </fieldset>

        <fieldset >
          <legend className="text-base">Location</legend>
          <input name="location" type="text" className="input input-bordered w-full" placeholder="Your Location" required />
        </fieldset>

        <fieldset >
          <legend className="text-base">Email</legend>
          <input name="email" type="email" className="input input-bordered w-full" defaultValue={user?.email} readOnly />
        </fieldset>

        <fieldset>
          <legend className="text-base">Upload Photo</legend>
          <label className="input w-full">
          <span className="label">https://</span>
         <input type="text" name='photourl' placeholder="URL" />
        </label>
        </fieldset>
        <fieldset className="md:col-span-2">
          <legend className="text-base">Brief Bio</legend>
          <textarea
            name="bio"
            className="textarea textarea-bordered w-full"
            rows="4"
            placeholder="Briefly describe your teaching experience or approach"
            required
          ></textarea>
        </fieldset>

        <input
          type="submit"
          value="Register as Tutor"
          className="btn btn-block bg-[#6c2a8c] hover:bg-[#6c2a8c]/70 text-white md:col-span-2"
        />
      </form>
    </div>
  );
};

export default BecTutor;
