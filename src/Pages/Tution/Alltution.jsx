import React, { useEffect, useState } from 'react';
import Tutioncard from './Tutioncard';

const Alltution = () => {
    const [tutions,settutions]=useState([])
    useEffect(()=>{
      fetch('http://localhost:5000/tutions')
      .then(res=>res.json())
      .then(data=>settutions(data))
    },[])
    return (
        <div className='grid grid-cols-3 gap-6'>
          {
          tutions.map(tution=><Tutioncard key={tution._id} tution={tution}></Tutioncard>)
          }
        </div>
    );
};

export default Alltution;