import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../NavBar/Navbar';

const Homepage = () => {
    return (
        <div>
        <div className='max-w-6xl mx-auto'>
            <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
            </div>
            
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Homepage;