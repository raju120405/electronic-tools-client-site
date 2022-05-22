import React from 'react';
import AvailableServices from './AvailableServices';
import Banner from './Banner';
import Business from './Business';
import Revews from './Revews';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableServices></AvailableServices>
            <Business></Business>
            <Revews></Revews>
        </div>
    );
};


export default Home;