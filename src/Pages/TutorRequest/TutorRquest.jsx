import React, { useContext } from 'react';
import { authcontext } from '../../Provider/Authprovider';
import axios from 'axios';
import Swal from 'sweetalert2';
const TutorRquest = () => {
  const { user } = useContext(authcontext);

  const handleaddtution = async(e) => {
    e.preventDefault();
    const form = e.target;

    const studentName = form.studentName.value;
    const phone = form.phone.value;
    const medium = form.medium.value;
    const studentClass = form.studentClass.value;
    const subject = form.subject.value;
    const tuitionType = form.tuitionType.value;
    const preferredTutor = form.preferredTutor.value;
    const daysPerWeek = form.daysPerWeek.value;
    const location = form.location.value;
    const email = form.email.value;
    const salary = form.salary.value;
    const status = form.status.value;
    const tutionData = {
      studentName,
      phone,
      medium,
      studentClass,
      subject,
      tuitionType,
      preferredTutor,
      daysPerWeek,
      location,
      email,
      salary,
      status,
    };
 console.log(tutionData);
 const res=await axios.post('http://localhost:5000/tutions',tutionData)
 console.log(res.data)
 if(res.data.insertedId){
  Swal.fire({
                           title: "Your Tutor Request Added Successfully",
                           icon: "success",
                           showConfirmButton:false,
                           timer:2000
                           })
 }
  };

  return (
    <div className='flex md:flex-row flex-col gap-10 p-2'>
      <div className='md:w-2/3 space-y-6'>
        <h1 className='text-3xl font-bold text-center'>Are you looking for a tutor?</h1>
        <p className='text-lg text-[#66789c] text-center'>
          If so, please fill out the form and let us know which class/area you need a tutor for. After submitting the form, one of our representatives will contact you on the provided mobile number within the next 24 hours.
        </p>

        <form onSubmit={handleaddtution}>
          <div className="grid md:grid-cols-2 gap-6 pb-6">
            <fieldset className="w-full">
              <legend className="text-base">Student Name:</legend>
              <input type="text" name="studentName" className="input input-bordered w-full" placeholder="Enter student name" />
            </fieldset>

            <fieldset className="w-full">
              <legend className="text-base">Phone:</legend>
              <input type="tel" name="phone" className="input input-bordered w-full" placeholder="017XXXXXXXX" required />
            </fieldset>

            <fieldset className="w-full">
              <legend className="text-base">Select your medium</legend>
              <select name="medium" defaultValue="" className="select w-full" required>
                <option disabled value="">Select Medium</option>
                <option>Bangla Medium</option>
                <option>English Medium</option>
                <option>Madrasa Medium</option>
              </select>
            </fieldset>

            <fieldset className="w-full">
              <legend className="text-base">Select Class:</legend>
              <input type="text" name="studentClass" className="input input-bordered w-full" placeholder="Your Class" />
            </fieldset>

            <fieldset className="w-full">
              <legend className="text-base">Tutoring Subject:</legend>
              <input type="text" name="subject" className="input input-bordered w-full" placeholder="Choose your subject" />
            </fieldset>

            <fieldset className="w-full">
              <legend className="text-base">Tuition Type</legend>
              <select name="tuitionType" defaultValue="" className="select w-full" required>
                <option disabled value="">Tuition Type</option>
                <option>Home Tutoring</option>
                <option>Online Tutoring</option>
                <option>Group Tutoring</option>
              </select>
            </fieldset>

            <fieldset className="w-full">
              <legend className="text-base">Preferred Tutor</legend>
              <select name="preferredTutor" defaultValue="" className="select w-full" required>
                <option disabled value="">Preferred Tutor</option>
                <option>Male</option>
                <option>Female</option>
                <option>Any</option>
              </select>
            </fieldset>

            <fieldset className="w-full">
              <legend className="text-base">Days Per Week:</legend>
              <input type="number" name="daysPerWeek" className="input input-bordered w-full" placeholder="e.g. 3" />
            </fieldset>

            <fieldset className="w-full">
              <legend className="text-base">Location:</legend>
              <input type="text" name="location" className="input input-bordered w-full" placeholder="Enter division & district name" />
            </fieldset>

            <fieldset className="w-full">
              <legend className="text-base">User Email:</legend>
              <input type="email" name="email" className="input input-bordered w-full" defaultValue={user?.email} required />
            </fieldset>

            <fieldset className="w-full">
              <legend className="text-base">Given Salary:</legend>
              <input type="text" name="salary" className="input input-bordered w-full" placeholder="Enter respectable salary" />
            </fieldset>

            <fieldset className="w-full">
              <legend className="text-base">Status</legend>
              <select name="status" defaultValue="Active" className="select w-full" required>
                <option disabled value="">Your Tuition is -</option>
                <option>Active</option>
                <option>Booked</option>
              </select>
            </fieldset>
          </div>

          <input
            type="submit"
            value="Submit Your Data"
            className="btn btn-block bg-[#6c2a8c] hover:bg-[#6c2a8c]/50 text-white text-base"
          />
        </form>
      </div>

      {/* Right-side FAQ section */}
      <div className='md:w-1/3 shadow-xl'>
        <h1 className='text-3xl font-bold pb-8 pt-2 text-center'>HELP & INFO</h1>
        <details className="collapse bg-base-100 border-base-300 border">
          <summary className="collapse-title font-semibold">Q. If I can't get the desired tutor?</summary>
          <div className="collapse-content text-sm">
            Just fill up the request tutor form and send us. We will try to find your desired tutor.
          </div>
        </details>
        <details className="collapse bg-base-100 border-base-300 border">
          <summary className="collapse-title font-semibold">Q. What will happen after filling the form?</summary>
          <div className="collapse-content text-sm">
            After you submit the form, the information will be sent to the TutorSheba support team. They will review and publish it on the available tuitions section.
          </div>
        </details>
        <details className="collapse bg-base-100 border-base-300 border">
          <summary className="collapse-title font-semibold">Q. Is there any fee for posting a tuition request?</summary>
          <div className="collapse-content text-sm">
            No, it's completely free.
          </div>
        </details>
        <details className="collapse bg-base-100 border-base-300 border">
          <summary className="collapse-title font-semibold">Q. How long does it take to get a tutor?</summary>
          <div className="collapse-content text-sm">
            Usually within 24 hours. It might take longer depending on subject and location.
          </div>
        </details>
        <details className="collapse bg-base-100 border-base-300 border">
          <summary className="collapse-title font-semibold">Q. Can I update or cancel my request?</summary>
          <div className="collapse-content text-sm">
            Yes. Contact support to update or cancel before tutor assignment.
          </div>
        </details>
      </div>
    </div>
  );
};

export default TutorRquest;
