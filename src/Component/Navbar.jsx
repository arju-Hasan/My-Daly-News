import React from 'react';
import { NavLink } from 'react-router';
import  userProfile from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-4'>
            <div></div>
            <div className="nav space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
            </div>
            <div className="profile flex items-center gap-4">
            <img src={userProfile} alt="profile" />
            <button className='btn btn-primary px-8'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;