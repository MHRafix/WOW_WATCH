import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleReview from './SingleReview/SingleReview';

const Reviews = () => {

    // Use useState for storing the reviews in the state
    const [ reviews, setReviews ] = useState([]);
    
    // Use useEffect for loading data form the node server
    useEffect( () => {
        fetch('https://sheltered-reef-45281.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, []);

    return (
        <section>
            <div className="reviewSection">
                <div className="container">
                    <div className="sectionHeading">
                        <h1 className="heading">Customer Reviews</h1>
                    </div>
                    <Row xs={1} md={3} className="g-4">
                           {
                               reviews.map(review => <SingleReview key={review._id} review={review} /> )
                           }
                        </Row>
                </div>
            </div>
        </section>
    );
};

export default Reviews;