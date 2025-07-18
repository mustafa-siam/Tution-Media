import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,FreeMode, Pagination } from 'swiper/modules';
import useTutors from '../Hooks/Usetutors';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Tutor from '../Tutors/Tutor';
const Premiumtotors = () => {
    const tutors=useTutors();
    return (
        <div>
            <div className='text-center space-y-4 pb-12'>
                <h1 className='text-[#05264e] text-5xl font-bold'>Our Popular Tutors</h1>
                <p className='text-[#66789c] text-3xl font-medium'>Here are few of the Verified Teachers</p>
            </div>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
          {
                tutors.map(tutor=><SwiperSlide key={tutor._id} ><Tutor tutor={tutor}></Tutor></SwiperSlide> )
            }
      </Swiper>
        </div>
    );
};

export default Premiumtotors;