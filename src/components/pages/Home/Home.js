import React from 'react';
import Banner from '../../Banner/Banner';
import Pricing from '../../Pricing/Pricing';
import Quality from '../../Quality/Quality';
import Services from '../../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Quality></Quality>
            <Services></Services>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;