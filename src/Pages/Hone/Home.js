import React from 'react';
import AvailableServices from './AvailableServices';
import Banner from './Banner';
import Business from './Business';
import ExtraSpecial from './ExtraSpecial';
import Revews from './Revews';
import SpecialProducts from './SpecialProducts';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableServices></AvailableServices>
            <Business></Business>
            <ExtraSpecial></ExtraSpecial>
            <Revews></Revews>
            <SpecialProducts></SpecialProducts>
        </div>
    );
};


export default Home;