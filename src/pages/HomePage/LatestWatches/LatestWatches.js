import React from 'react';
import { Row } from 'react-bootstrap';
import useWatches from '../../../CustomHooks/useWatches';
import WatchCard from './WatchCard/WatchCard';

const LatestWatches = () => {
    
      const [watches] = useWatches();
    return (
            <section>
                <div className="latestWatchesSetion">                    
                    <div className="container">
                        <div className="sectionHeading">
                            <h1 className="heading">Latest Watches</h1>
                        </div>
                         <Row xs={1} md={3} className="g-4">
                                {
                                    watches.map(watch => <WatchCard key={watch._id} watch={watch} /> )
                                }
                            </Row>
                    </div>
                </div>
            </section>
    );
};

export default LatestWatches;







/*

https://i.ibb.co/G9NjJgh/316-3160692-techcomm-y30-water-resistant-fitness-activity-tracker-smart.png
https://i.ibb.co/8B5FC2s/316-3163883-smartwatches-smartwatch.png
https://i.ibb.co/mXvv2Nd/Huawei-Watch-GT-Black.png
https://i.ibb.co/k5czkWC/images-1.png
https://i.ibb.co/P1kSC3T/images-2.png
https://i.ibb.co/99hBSXH/images.png
https://i.ibb.co/mDfHWm8/rce-z17c-smart-band-fitness-tracker-waterproof-smart-bracelet-28black-29-500x500.png
https://i.ibb.co/6W7RF7C/Watch-PNG-Download-Image.png
https://i.ibb.co/QKJs84D/xiaomi-band-4-2.png
https://i.ibb.co/GpCGbj1/Xiaomi-Smart-Band-6-Featured-Image.png

*/