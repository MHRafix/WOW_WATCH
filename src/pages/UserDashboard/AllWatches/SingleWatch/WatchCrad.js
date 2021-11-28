import React from 'react';

const WatchCard = (props) => {
    
    // Take na empty watch variable
    const watch = props.watch;
    // Hnalde delete ordered  watch
    const handleDeleteWatch = id => {
        const procced = window.confirm("Are you sure to ?");
   
        if(procced){
           const url = `https://sheltered-reef-45281.herokuapp.com/watches/${id}`;
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
        <div className="watchCardOwn">
            {/* <span className="subjectValue">{ props?.serial + }</span> */}
            <span className="subjectValue"><img width="120" className="orderImg" src={ watch?.primaryImg } alt="watchImg" /></span>
            <span className="subjectValue">{ watch?.name }</span>
            <span className="subjectValue">$ { watch?.regularPrice }</span>
            <span className="subjectValue">$ { watch?.salePrice }</span>
            <span onClick={ () => handleDeleteWatch( watch._id ) } className="subjectValue14">&times;</span>
        </div> 
    );
};

export default WatchCard;