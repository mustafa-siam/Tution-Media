import Lottie from 'lottie-react';
import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import tutoringjobs from '../../assets/tutoringjobs/tutoringjobs.json'
import { Link } from 'react-router-dom';
const Tutoringjobs = () => {
    return (
        <div>
            <div className='text-center space-y-4'>
               <h2 className='text-[#05264e] text-5xl font-bold'>SEARCH TUTORING JOBS</h2>
               <h3 className='text-[#66789c] text-3xl font-medium'>Find Your Tution Jobs, in your area</h3>
            </div>
            <div className='flex md:flex-row flex-col justify-center items-center text-center'>
               <div className='md:w-1/2'>
                <Lottie animationData={tutoringjobs}></Lottie>
               </div>
               <div className='md:w-1/2'>
                <h4 className='text-xl font-bold'>Looking for interesting tuition jobs to excel your teaching experience?</h4>
                <p className='text-lg text-[#66789c]'>If teaching jobs interests you, then you are on the right place. tutorsheba.com, we often have 500+ open home tuition jobs that are genuine and 100% verified. Whether you are starting your career as a tuition teacher or an expert in your field, we can help you find your next big tuition job. You can search and apply to the tuition jobs that best fit your skills, favorable location, class and subjects.</p>
          <Link to={'/tutions'}><button className="btn  mt-8 bg-gradient-to-r from-[#6c2a8c] to-[#a71678] tracking-widest py-6 text-xl text-white hover:text-white/70 duration-300"><IoSearchSharp />
            SEARCH TUTION <FaArrowRight />
          </button></Link>          
               </div>
            </div>
        </div>
    );
};

export default Tutoringjobs;