import {
  createBrowserRouter,
} from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import { Children } from "react";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Account/Register";
import Login from "../Pages/Account/Login";
import Alltution from "../Pages/Tution/Alltution";


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
}]
  },
]);
export default router;