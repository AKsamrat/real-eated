import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';

const Roots = () => {
  const loc = useLocation();
  useEffect(() => {
    if (loc.pathname === '/') {
      document.title = `LUXARY-Home`;
    } else {
      document.title = `LUXARY${loc.pathname.replace('/', '-')}`;
    }
    if (loc.state) {
      document.title = loc.state;
    }
  }, [loc.pathname]);
  return (
    <div className="container lg:px-20 px-5 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
