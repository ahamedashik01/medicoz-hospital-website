import React from 'react';
import Banner from '../../Banner/Banner';
import Pricing from '../../Pricing/Pricing';
import Quality from '../../Quality/Quality';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Quality></Quality>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;