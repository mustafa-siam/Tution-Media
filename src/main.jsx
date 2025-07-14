import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import router from './Routes/Routers.jsx';
import Authprovider from './Provider/Authprovider.jsx';

createRoot(document.getElementById('root')).render(
  <Authprovider>
<StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
  </Authprovider>
  
)
