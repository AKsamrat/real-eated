import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';

const Roots = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
