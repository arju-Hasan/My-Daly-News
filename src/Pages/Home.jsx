import LeftAside from '../Component/HomeLyout/LeftAside';
import RightAside from '../Component/HomeLyout/RightAside';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            <nav>
              <Navbar />
           </nav>
           <main className='grid grid-cols-12 *:border-2'>
            <section className='col-span-3'> 
                <LeftAside />
            </section>
            <section className='col-span-6'>
                <Outlet></Outlet>
            </section>
            <section className='col-span-3'> 
                <RightAside />
            </section>           
           </main>            
        </div>
    );
};

export default Home;