import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
const Mainlayout = () => {
    return (
        <div className='max-w-7xl mx-auto space-y-12'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;