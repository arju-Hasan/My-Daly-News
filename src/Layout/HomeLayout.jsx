import Header from '../Component/Header';
import LatestNews from '../Component/LatestNews';
import MyContainer from '../Component/MyContainer';
import { Outlet } from 'react-router';
import Home from '../Pages/Home';

const HomeLayout = () => {
    return (
        <div>
        <MyContainer>
                <header>
                    <Header />
                    <LatestNews />
                </header>
                <main>
                    <Outlet>
                         <Home />
                    </Outlet>
                </main>
        </MyContainer>
        </div>
    );
};

export default HomeLayout;
          