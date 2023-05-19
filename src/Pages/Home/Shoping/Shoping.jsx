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
      <div className='w-2/3 mx-auto'>
        <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
      <Tab>Title 3</Tab>
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