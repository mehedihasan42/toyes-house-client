import React from 'react';
import Banner from '../Banner/Banner';
import ImageGellary from '../../ImageGellary/ImageGellary';
import Shoping from '../Shoping/Shoping';
import Customar from '../../Customar/Customar';
import About from '../About/About';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
      <>
      <Helmet><title>Toyes House</title></Helmet>
        <div>
            <Banner></Banner>
            <About></About>
            <ImageGellary></ImageGellary>
            <Shoping></Shoping>
            <Customar></Customar>
        </div>
      </>
    );
};

export default Home;