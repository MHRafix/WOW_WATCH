import React from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../CustomHooks/useAuth';
import useWatches from '../../CustomHooks/useWatches';
import axios from 'axios';
import Button from '@restart/ui/esm/Button';

const SingleWatch = () => {
    
    const [ watches, setWatches ] = useWatches();
    const {uniqueId} = useParams();

    const history = useHistory();
    const { user } = useAuth();
    

    // Conditionaly finding the unique watch
    if(watches.length) {
       const uniqueWatch = watches.find(watch => watch._id === uniqueId);
       
       // Conditionaly set the unique watch in  the state
       if(uniqueWatch) {
          setWatches(uniqueWatch);
       } else {
           history.replace('/home');
           alert('No watch found.');
       }
    }

    // Let's destructure the watxh data from the single object
    const { name, primaryImg, salePrice } = watches;

    // React hook form 
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://sheltered-reef-45281.herokuapp.com/orders', data)
        .then(res => {
          if(res.data.insertedId){
              alert('Order Successfully Confirmed!');
              reset();
           }
        })

  };
    
    return (
        <section>
            <div className="singleWatcPage">
                <div className="container">
                    <div className="singleWatch">
                        <div className="card">
                            <div className="watchDetails">
                                <img className="img-fluid" src={ primaryImg } alt="watchImage" /> <br />
                                <span className="heading">{ name }</span>
                                <span className="heading">$ { salePrice }</span>
                                
                            </div>

                            <div className="orderForm">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="hidden" id="inputField" {...register("name", { required: true })} value={ user.displayName } /> <br />
                                <input type="hidden" id="inputField" {...register("email", { required: true })} value={ user.email } /> <br />
                                <input type="hidden" id="inputField" {...register("watchId", { required: true })} value={ uniqueId } /> <br />
                                <input id="inputField" type="tel" {...register("mobileNo", { required: true })} placeholder="Enter your mobile no" />
                                <textarea id="inputField" type="number" {...register("address", { min: 0, max: 5 })} min="0" max="5" placeholder="Enter your preset address" /> <br />
                                <Button className="buyBtn" type="submit">Confirm Order</Button>
                             </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleWatch;