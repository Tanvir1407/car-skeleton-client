import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Footer from './Footer';
import ToolsFeatures from './ToolsFeatures';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToolsFeatures></ToolsFeatures>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
        </div>
    );
};

export default Home;