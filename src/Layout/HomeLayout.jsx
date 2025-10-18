import React from 'react';
import Header from '../Component/Header';
import LatestNews from '../Component/LatestNews';
import MyContainer from '../Component/MyContainer';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';

const HomeLayout = () => {
    return (
        <div>
           <header>
             <MyContainer>
                <Header />
                <LatestNews />  
            </MyContainer>
           </header>
           <nav>
               <MyContainer>
                   <Navbar />
               </MyContainer>
           </nav>
           <main>
            <section> left nav</section>
            <section>
                <Outlet></Outlet>
            </section>
            <section> right nav</section>
           <p>arju</p>
           </main>

           
        </div>
    );
};

export default HomeLayout;