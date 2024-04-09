import React from 'react';
import EstateCard from '../Components/EstateCard';

const Phouse = ({ penthouse }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {penthouse.map(item => (
        <EstateCard key={item.id} item={item}></EstateCard>
      ))}
    </div>
  );
};

export default Phouse;
