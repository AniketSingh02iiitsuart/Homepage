import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Homepage_component/Navbar';
import Footer from './Homepage_component/Footer';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> 
      <Footer/>
      
    </>
  );
}

export default Layout;
