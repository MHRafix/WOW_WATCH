import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const SingleReview = (props) => {
    // Let's destructure the review data from the object
    const { name, image, ratting, review } = props.review;
    return (
        <Col>
        <Card>
            <Card.Img className="reviewerImage" variant="top" src={ image } />
            <Card.Body>
                <div className="detail">
                  <span className="reviewerName">{name}</span>
                  <span className="reviewRatting">
                  <Rating readonly
                    initialRating={ratting}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    />      
                 </span>
                </div>
          
            <Card.Text>
                { review.slice(0, 50) }...
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default SingleReview;