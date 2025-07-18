
import Tutor from './Tutor';
import useTutors from '../Hooks/Usetutors';

const Alltutors = () => {
   const tutors=useTutors();
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2'>
            {
                tutors.map(tutor=><Tutor key={tutor._id} tutor={tutor}></Tutor>)
            }
        </div>
    );
};

export default Alltutors;