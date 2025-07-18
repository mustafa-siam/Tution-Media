import {
  createBrowserRouter,
} from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import { Children } from "react";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Account/Register";
import Login from "../Pages/Account/Login";
import Alltution from "../Pages/Tution/Alltution";
import TutorRquest from "../Pages/TutorRequest/TutorRquest";
import Tutiondetails from "../Pages/Tution/Tutiondetails";
import BecTutor from "../Pages/Tutors/BecTutor";
import Alltutors from "../Pages/Tutors/Alltutors";
import Tutordetails from "../Pages/Tutors/Tutordetails";
import Applytution from "../Pages/Tution/Applytution";
import Myapplication from "../Pages/Myapplication/Myapplication";
import Privateroute from "../Privateroute/Privateroute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[{
        path:'/',
        element:<Home></Home>
    },
  {
    path:'/register',
    element:<Register></Register>
  },
{
  path:'/login',
  element:<Login></Login>
},
{
  path:'/tutions',
  element:<Alltution></Alltution>
},
{
path:'/reqtutor',
element:<TutorRquest></TutorRquest>
},
{
  path:'/tutiondetails/:id',
  element:<Privateroute><Tutiondetails></Tutiondetails></Privateroute> ,
  loader:({params})=>fetch(`http://localhost:5000/tutions/${params.id}`)
},
{
  path:'/bectutor',
  element:<BecTutor></BecTutor>
},
{
  path:'/alltutors',
  element:<Privateroute><Alltutors></Alltutors></Privateroute> 
},
{
  path:'/tutordetails/:id',
  element:<Tutordetails></Tutordetails>,
  loader:({params})=>fetch(`http://localhost:5000/tutors/${params.id}`)
},
{
  path:"/apply/:id",
  element:<Applytution></Applytution>,
  loader:({params})=>fetch(`http://localhost:5000/tutions/${params.id}`)
},
{
  path:'/myapplication',
  element:<Privateroute><Myapplication></Myapplication></Privateroute> 
}]
  },
]);
export default router;