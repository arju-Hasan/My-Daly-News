import React from 'react';
import logo from '../assets/logo.png';
import MyContainer from './MyContainer';

const Header = () => {
    return (
        <div className='flex justify-center items-center'>
            <MyContainer>
                <img className='w-220 mx-auto p-4' src={logo} alt="" />
                <p className='text-center'>Journalism Without Fear or Favour</p>
            </MyContainer>
        </div>
    );
};

export default Header;