import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Footer from './footer-components/footer';

function Appsection() {
    return (
      <div className='app h-100%'>
          <div  className='sticky top-0 z-50'><Navbar/></div>

          <main>
            <Outlet/>
          </main>
          <Footer/>
      </div>
    );
  }
  
  export default Appsection;