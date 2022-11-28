import React from 'react';
import AdvertiseItem from '../AdvertiseItem/AdvertiseItem';
import BrandName from '../BrandName/BrandName'

import { Header } from '../Header/Header';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrandName></BrandName>
            <Slider></Slider>
            <AdvertiseItem></AdvertiseItem>
            
        </div>
    );
};

export default Home;