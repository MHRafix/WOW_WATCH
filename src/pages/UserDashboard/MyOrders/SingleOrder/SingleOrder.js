import React from 'react';

const SingleOrder = (props) => {
    
    // Take na empty watch variable
    let watch;
    // Conditionaly take the single order using for loop
    if(props.order){
    const orderedWatches = props.order;
    for(let watches of orderedWatches) {
        watch = watches;
        
    }
    }


       // Take an empty variable for storing bookedId
       let uniqueId;

       // Let's Filter out the order id 
       const uniqueOrder = props.orderedId;
       for(let id of uniqueOrder){
           uniqueId = id;
       }

    // Hnalde delete ordered  watch
    const handleDeleteWatch = id => {
        const procced = window.confirm("Are you sure ?");
   
        if(procced){
           const url = `http://localhost:5000/orders/${id}`;
           fetch(url, {
               method: 'DELETE'
           })
           .then(res => res.json())
           .then(data => {
               if(data.deletedCount > 0){
                  alert("Watch deleted successfully.");
                  window.location.reload();
           }
        })
        }
    }

    
 
    return (
        <div className="watchCard">
            {/* <span className="subjectValue">{ props?.serial + }</span> */}
            <span className="subjectValue"><img width="120" className="orderImg" src={ watch?.primaryImg } alt="watchImg" /></span>
            <span className="subjectValue">{ watch?.name }</span>
            <span className="subjectValue">$ { watch?.salePrice }</span>
            <span className="subjectValue">1</span>
            <span className="subjectValue">$ { watch?.salePrice * 1 }</span>
            <span className="status">{ watch?.status }</span>
            <span onClick={ () => handleDeleteWatch( uniqueId ) } className="subjectValue14">&times;</span>
        </div> 
    );
};

export default SingleOrder;