
// useTutors.js
import { useState, useEffect } from 'react';

const useTutors = () => {
  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/tutors')
      .then(res => res.json())
      .then(data => setTutors(data));
  }, []);
  return tutors;
};

export default useTutors;
