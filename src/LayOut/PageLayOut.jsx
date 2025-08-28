import React from 'react';
import MenuPage from '../page/MenuPage';
import { Outlet } from 'react-router-dom';
import Footerpage from '../page/Footerpage'; // Ensure FooterPage is defined or imported
import ScrollToTop from '../page/ScrollToTop'; // Import ScrollToTop if needed
const PageLayOut = () => {
  return (
    <>
      <ScrollToTop />
      <main className='display-flex flex-column justify-content-between align-items-center'>
        <MenuPage />
        <main>
          <Outlet />
        </main>

      
        {/* FooterPage component should be defined or imported here */}
      </main>
    </>
  );
};

export default PageLayOut;
