import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../CustomHooks/useAuth';
import axios from 'axios';
import Dashboard from '../Dashboard';
import { useHistory } from 'react-router';

const AddReview = () => {
    // Take history for changing the route of the app
    const history = useHistory();

    // Import use auth
    const { user, admin } = useAuth();
    
     // Prevent admins from the normal user route
     if(user?.email && admin){
        history.replace('/dashboard');
     }


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://sheltered-reef-45281.herokuapp.com/reviews', data)
        .then(res => {
          if(res.data.insertedId){
              alert('Review Successfully Added!');
              reset();
           }
        })

  };


    return (
        <section>
            <div className="wrapper">
                <div className="container">
                    <Dashboard />
                    <div className="addreviews">
                       <div className="reviewForm">
                           <div className="sectionHeading">
                           <h1 className="heading">Leave a Review</h1>
                           </div>
                         <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="hidden" id="inputField" {...register("name", { required: true })} value={ user.displayName } /> <br />
                            <input type="hidden" id="inputField" {...register("image", { required: true })} value={ user.photoURL } /> <br />
                            <input id="inputField" type="text" {...register("ratting", { min: 0, max: 5 })} min="0" max="5" placeholder="Enter ratting value" /> <br />
                            <textarea id="inputField" type="text" {...register("review", { required: true })} placeholder="Enter your review description" />
                            <Button id="inputField" className="buyBtn" type="submit">Submit</Button>
                            </form>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddReview;