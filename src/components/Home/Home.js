import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Footer from './Footer';
import ToolsFeatures from './ToolsFeatures';
import Info from './Info';
import Offer from './Offer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
             <Offer></Offer>
            <ToolsFeatures></ToolsFeatures>
            <BusinessSummary></BusinessSummary>
            <Info></Info>
            <Footer></Footer>
        </div>
    );
};

export default Home;