import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { authcontext } from '../../Provider/Authprovider';
import axios from 'axios';
import Swal from 'sweetalert2';

const Applytution = () => {
    const {id}=useParams();
    const navigate = useNavigate();

    const {user}=useContext(authcontext)
    const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const application = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      qualification: form.qualification.value,
      message: form.message.value,
      tutionId: id,
    };
    console.log(application)
    axios.post('http://localhost:5000/applications',application,{withCredentials:true})
    .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
            Swal.fire({
                         title: "Successfull",
                         icon: "success",
                         text:'Application submitted successfully! Thank you for applying. We will review your application and get back to you soon.',
                         })
        }
        form.reset()
        navigate(-2)
    })
}
    return (
          <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#05264e]">
        Apply for this Tuition – ID: <span className="text-blue-600">{parseInt(id.slice(-4),16)}</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Full Name" required className="input input-bordered w-full" />
        <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" required className="input input-bordered w-full" />
        <input type="tel" name="phone" placeholder="Phone Number" required className="input input-bordered w-full" />
        <input type="text" name="qualification" placeholder="Your Qualification" required className="input input-bordered w-full" />
        <textarea name="message" placeholder="Why are you interested in this tuition?" className="textarea textarea-bordered w-full" rows={4}></textarea>

        <button type="submit" className="btn btn-primary w-full bg-gradient-to-r from-[#540654] via-[#cc0d85] to-[#540654] text-white">
          Submit Application
        </button>
      </form>
    </div>
    );
};

export default Applytution;