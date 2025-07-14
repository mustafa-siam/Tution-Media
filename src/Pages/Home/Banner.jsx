import tutor1 from '../../assets/tution/tutor1.jpg'
import tutor2 from '../../assets/tution/tutor2.jpeg'

import { motion } from "motion/react"
const Banner = () => {
    return (
        <div className="hero bg-base-200 h-[85vh]">
  <div className="hero-content flex-col-reverse lg:flex-row-reverse">
    <motion.div className='flex-1'>
 <motion.img
      src={tutor1}
      animate={{y:[0,-50,0]}}
      transition={{duration:3,repeat:Infinity}}
      className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-b-8 border-[#3c65f5] border-l-8 hidden lg:block   shadow-2xl"
    />
    <motion.img 
    src={tutor2}
    animate={{x:[150,200,150], y:[20]}}
    transition={{duration:3,repeat:Infinity}}
    className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-b-8 border-[#3c65f5] border-l-8 hidden lg:block  shadow-2xl " 
    alt=""
     />
    </motion.div>
    <motion.div 
            className='flex-1'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1}}
            transition={{
                duration: 0.6,
                scale: { type: "spring", visualDuration: 0.7, bounce: 0.5 },
            }}>
      <h1 className="text-5xl font-bold">The <span 
      className='text-[#3c65f5]  [text-shadow:-4px_4px_8px]'> Easiest Way </span>
to Get Your New Job</h1>
      <p className="py-6 text-[#4f5e64] text-2xl">
        Each month, more than 3 million job seekers turn to
website in their search for work, making over <br /> 140,000 <br />
applications every single day

      </p>
      <button className="btn btn-primary">Get Started</button>
    </motion.div>
  </div>
</div>
    );
};

export default Banner;