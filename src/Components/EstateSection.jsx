import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EstateCard from './EstateCard';
import Phouse from '../tab/Phouse';
import BeatchFront from '../tab/BeatchFront';
import Villa from '../tab/Villa';
import PrivateIsland from '../tab/PrivateIsland';

const EstateSection = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [data, setData] = useState([]);
  // console.log(data);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const penthouse = data.filter(item => item.segment_name === 'Penthouse');
  const beatchFront = data.filter(item => item.segment_name === 'Beatchfront');
  const villas = data.filter(item => item.segment_name === 'Villa');
  const privateIsland = data.filter(
    item => item.segment_name === 'PrivateIsland'
  );

  console.log(privateIsland);

  return (
    <div className="mt-8 md:font-medium md:text-lg text-[#AD8B00] ">
      <h3 className="text-center text-2xl md:text-5xl font-bold pt-6">
        Luxury Category
      </h3>
      <p className="text-center py-4">
        Select The Category to find your Luxury life and Enjoy the Life
      </p>
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab>Penthouse</Tab>
          <Tab>Beatchfront</Tab>
          <Tab>Villas</Tab>
          <Tab>Pvt.Island </Tab>
        </TabList>
        <TabPanel>
          <Phouse penthouse={penthouse}></Phouse>
        </TabPanel>
        <TabPanel>
          <BeatchFront beatchFront={beatchFront}></BeatchFront>
        </TabPanel>
        <TabPanel>
          <Villa villas={villas}></Villa>
        </TabPanel>
        <TabPanel>
          <PrivateIsland privateIsland={privateIsland}></PrivateIsland>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default EstateSection;
