import React from 'react';
import { Row } from 'react-bootstrap';
import useWatches from '../../CustomHooks/useWatches';
import WatchCard from '../HomePage/LatestWatches/WatchCard/WatchCard';

const Watches = () => {
    const [watches] = useWatches();
    return (
        <section>
                <div className="latestWatchesSetion">                    
                    <div className="container">
                        <div className="sectionHeading">
                            <h1 className="heading">All Watches</h1>
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

export default Watches;