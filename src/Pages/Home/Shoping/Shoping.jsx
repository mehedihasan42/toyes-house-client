import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cats from '../../SubTabs/cats';
import Horse from '../../SubTabs/Horse';
import TeddyBear from '../../SubTabs/teddyBear';




const Shoping = () => {

    return (
      <div className='my-8'>
       <h2 className='font-bold lg:font-extrabold text-xl bg-slate-300 mx-auto w-36 rounded p-4'>Shop Now</h2>
      <div className='lg:w-2/3 mx-auto'>
        <Tabs>
    <TabList className="flex flex-center ml-8 lg:w-96 lg:mx-auto my-8 space-x-2 lg:space-x-4">
      <Tab className="px-2 lg:px-4 py-2 bg-gray-700 text-gray-200 rounded-md btn hover:btn-outline cursor-pointer transition-colors duration-300">Cat Toyes</Tab>
      <Tab className="px-2 lg:px-4 py-2 bg-gray-700 text-gray-200 rounded-md btn hover:btn-outline cursor-pointer transition-colors duration-300">Horse Toyes</Tab>
      <Tab className="px-2 lg:px-4 py-2 bg-gray-700 text-gray-200 rounded-md btn hover:btn-outline cursor-pointer transition-colors duration-300">Taddy Toyes</Tab>
    </TabList>

    <TabPanel>
     <Cats></Cats>
    </TabPanel>
    <TabPanel>
    <Horse></Horse>
    </TabPanel>
    <TabPanel>
      <TeddyBear></TeddyBear>
    </TabPanel>
  </Tabs>
      </div>
      </div>
      
      
    );
};

export default Shoping;