import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../NavBar/Navbar';

const Homepage = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Homepage;