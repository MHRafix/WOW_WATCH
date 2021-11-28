import React from 'react';
import useOrders from '../../../CustomHooks/useOrders';
import useWatches from '../../../CustomHooks/useWatches';
import SingleOrder from '../MyOrders/SingleOrder/SingleOrder';
import Dashboard from '../Dashboard';

const AllOrders = () => {
   // Import watch state
   const [ watches ] = useWatches();

   // Import use orders state
   const [ orders ] = useOrders();

    let watchOrders = [];
    let serialNo = 0;

    // Take an empty array for storing the booked id
    let orderedId = [];
    
   // Conditionaly finding out the current user orders using filter method
    if(orders){

     // Conditionaly finding out the orderId(watchId) of that orders using for loop
      for(const order of orders){
          orderedId.push(order._id);

          // Take the watchId from the order object
          const orderedWatchId = order.watchId;
         
         // Conditionaly finding out the absolute current user orders using filter method
            const orderedOrders = watches.filter(watch => watch._id === orderedWatchId);

            // Conditionaly set the current user orders
            if(orderedOrders) {
             watchOrders.push(orderedOrders) ;
            }

         }
    }
    
    return (
        <section>
            <div className="wrapper">
                <div className="container">
                    <Dashboard />
                    <div className="sectionHeading">
                        <h1 className="heaidng">Manage All Orders</h1>
                    </div>
                    <div className="orderCards">
                           <div className="orderCard">
                               <div className="tableHeading">
                                   {/* <span className="subjectName">SL. No</span> */}
                                   <span className="subjectName">Image</span>
                                   <span className="subjectName">Name</span>
                                   <span className="subjectName">Unit Price</span>
                                   <span className="subjectName">Quantity</span>
                                   <span className="subjectName">Total Price</span>
                                   <span className="subjectName">Status</span>
                                   <span className="subjectName">Action</span>
                               </div>

                               {
                                   watchOrders.length ? watchOrders.map(order => <SingleOrder key={serialNo + 1} order={order} serial={ serialNo + 1 } orderedId={ orderedId } />) : <></>
                               }

                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default AllOrders;