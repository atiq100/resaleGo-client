import React from 'react';
import BrandName from '../BrandName/BrandName'

import { Header } from '../Header/Header';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrandName></BrandName>
            <Slider></Slider>
            
        </div>
    );
};

export default Home;