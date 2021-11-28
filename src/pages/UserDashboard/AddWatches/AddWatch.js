import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Dashboard from '../Dashboard';

const AddReview = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://sheltered-reef-45281.herokuapp.com/watches', data)
        .then(res => {
          if(res.data.insertedId){
              alert('Watch Successfully Added!');
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
                             <h1 className="heaidng">Add Watch</h1>
                           </div>
                         <form onSubmit={handleSubmit(onSubmit)}>
                            <input id="inputField" type="text" {...register("name", { required: true })} placeholder="Enter watch name" /> <br />
                            <input id="inputField" type="text" {...register("salePrice", { required: true })} placeholder="Enter sale price" /> <br />
                            <input id="inputField" type="text" {...register("regularPrice", { required: true })} placeholder="Enter regular price" /> <br />
                            <input id="inputField" type="text" {...register("primaryImg", { required: true })} placeholder="Enter primary image url" /> <br />
                            <input id="inputField" type="text" {...register("secondaryImg", { required: true })} placeholder="Enter secondary image url" /> <br />
                            <input id="inputField" type="text" {...register("status", { required: true })} placeholder="Enter Watch status" /> <br />
                            <textarea id="inputField" type="text" {...register("description", { required: true })} placeholder="Enter Watch description" /> <br />
                            <Button id="inputField" className="buyBtn" type="submit">Add Now</Button>
                            </form>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddReview;