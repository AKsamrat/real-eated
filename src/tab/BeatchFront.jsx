import React from 'react';
import EstateCard from '../Components/EstateCard';

const BeatchFront = ({ beatchFront }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {beatchFront.map(item => (
        <EstateCard key={item.id} item={item}></EstateCard>
      ))}
    </div>
  );
};

export default BeatchFront;
