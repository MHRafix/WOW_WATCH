import React from 'react';
import Dashboard from '../Dashboard';
import WatchCard from './SingleWatch/WatchCrad';
import useWatches from '../../../CustomHooks/useWatches';

const AllWatch = () => {
    // Import the useWatches state
    const [ watches ] = useWatches();
    return (
        <section>
        <div className="wrapper">
            <div className="container">
                <Dashboard />
                <div className="sectionHeading">
                    <h1 className="heaidng">All Watches</h1>
                </div>
                <div className="orderCards">
                           <div className="orderCard">
                               <div className="tableHeading2">
                                   {/* <span className="subjectName">SL. No</span> */}
                                   <span className="subjectName">Image</span>
                                   <span className="subjectName">Name</span>
                                   <span className="subjectName">Regular Price</span>
                                   <span className="subjectName">Sale Price</span>
                                   <span className="subjectName">Action</span>
                               </div>

                               {
                                   watches ? watches.map(watch => <WatchCard key={ watch._id } watch={ watch } />) : <></>
                               }

                            </div>
                        </div>
            </div>
        </div>
    </section>
    );
};

export default AllWatch;