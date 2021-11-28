import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const WatchCard = ({watch}) => {
      
      // Use useHistory for cahnging the route
      const history = useHistory();
      
      // Let's destructuring the watch data from the object
      const { _id, name, primaryImg, secondaryImg, regularPrice, salePrice, description } = watch;
      
      // Handle order now button
      const handleOrderBtn = uniqueId => {
            // Make a unique router based on watch uniqueId
            const uniqueRoute = `/watches/singleWatch/watch_uniqueId/${uniqueId}`;
            history.replace(uniqueRoute);
      }
    return (
           <Col>
            <Card>
                <Card.Img className="watchImg img-fluid" variant="top" src={ primaryImg } />
                <Card.Img className="watchImg2 img-fluid" variant="top" src={ secondaryImg } />
                <Card.Body>
                <Card.Title>{ name }</Card.Title>
                <Card.Text>{ description.slice(0, 200) }</Card.Text>
                <div className="priceAndBtn">
                    <div className="price">
                        <span className="salePrice">$ { salePrice }</span> &nbsp;&nbsp;&nbsp;
                        <span className="regularPrice">$ { regularPrice }</span>
                    </div>
                    <div className="btn">
                <Button className="buyBtn" onClick={ () => handleOrderBtn(_id) } variant="primary">Order Now</Button>
                    </div>
                </div>
                </Card.Body>
            </Card>
            </Col>
    );
};

export default WatchCard;