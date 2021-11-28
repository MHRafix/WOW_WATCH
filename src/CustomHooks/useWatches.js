import { useEffect, useState } from "react";

const useWatches = () => {
      // Use useState for storing the watches data 
      const [ watches, setWatches ] = useState([]);

      // Use useEffect for getting the watches data from the node server
      useEffect( () => {
        fetch('https://sheltered-reef-45281.herokuapp.com/watches')
        .then(res => res.json())
        .then(data => setWatches(data));
    }, []);
    return [watches, setWatches];
};

export default useWatches;