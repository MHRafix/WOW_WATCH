import React from 'react';
import Features from './Features/Features';
import Slider from './HomeSlider/Slider';
import LatestWatches from './LatestWatches/LatestWatches';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <section>
            <div className="homePage">
                <Slider />
                <LatestWatches />
                <Features />
                <Reviews />
            </div>
        </section>
    );
};

export default Home;