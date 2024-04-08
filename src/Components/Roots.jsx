import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';

const Roots = () => {
  const loc = useLocation();
  console.log(loc);

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
