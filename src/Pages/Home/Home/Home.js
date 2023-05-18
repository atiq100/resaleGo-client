import React from 'react';
import AdvertiseItem from '../AdvertiseItem/AdvertiseItem';
import BrandName from '../BrandName/BrandName'

import { Header } from '../Header/Header';
import Slider from '../Slider/Slider';
import Services from '../Services/Services';
import LimittedOffer from '../LimittedOffer/LimittedOffer';


const Home = () => {
    return (
        <div>
            <Header></Header>
            
            <Services></Services>
            <LimittedOffer></LimittedOffer>
            <BrandName></BrandName>
            <Slider></Slider>
            <AdvertiseItem></AdvertiseItem>
            
        </div>
    );
};

export default Home;