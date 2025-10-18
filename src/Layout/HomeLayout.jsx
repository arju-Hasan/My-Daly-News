import React from 'react';
import Header from '../Component/Header';
import LatestNews from '../Component/LatestNews';
import MyContainer from '../Component/MyContainer';

const HomeLayout = () => {
    return (
        <div>
            <MyContainer>
                <Header />
                <LatestNews />  
            </MyContainer>
        </div>
    );
};

export default HomeLayout;