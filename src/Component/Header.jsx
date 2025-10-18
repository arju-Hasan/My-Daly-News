import React from 'react';
import logo from '../assets/logo.png';
import MyContainer from './MyContainer';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center items-center'>
            <MyContainer>
                <img className='w-120 mx-auto p-4' src={logo} alt="" />
                <p className='text-center text-accent'>Journalism Without Fear or Favour</p>
                <p className='text-center font-semibold text-accent'>{format(new Date(), 'EEEE, MMMM dd, yyyy')}</p>
                
            </MyContainer>
        </div>
    );
};

export default Header;