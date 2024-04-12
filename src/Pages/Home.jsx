import React from 'react';
import EstateSection from '../Components/EstateSection';
import Banner from '../Components/Banner';
import Testimonial from '../Components/Testimonial';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <EstateSection></EstateSection>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
