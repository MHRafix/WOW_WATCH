import { useEffect, useState } from "react";

const useOrders = () => {
  // Use useState for storung the ordered data
  const [ orders, setOrders ] = useState([]);

     // Load order from the node server usin useEffect
     useEffect( () => {
        fetch('https://sheltered-reef-45281.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);

    return [orders, setOrders];
};

export default useOrders;