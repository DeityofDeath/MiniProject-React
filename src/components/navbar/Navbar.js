import React from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className='nav'>
      <div className='w-100 '>
        <h1 className='text-center p-1 text-white'>STORE</h1>
        <h2 className='text-center p-1 text-white'>{isHomePage ? 'HOME' : 'PRODUCT'}</h2>
      </div>
    </div>
  );
}

export default Navbar;
