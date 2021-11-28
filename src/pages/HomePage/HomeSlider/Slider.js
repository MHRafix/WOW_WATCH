import React from 'react';
import { Container } from 'react-bootstrap';

const Slider = () => {
      let sliderDesc = "The electronic digital wristwatch has undergone not only dramatic evolutionary changes, but also dozens of offshoot permutations that feature every type of functionality you could imagine squeezing into a wristwatch. However, the most dramatic change of all involved price, as we've seen above.Below, we'll look at some notable firsts in the evolution of the electronic digital watch, and examine a surprising mechanical precursor that few people today know about. This collection is by no means comprehensive, so feel free to share your own favorite digital watch history moments in the comments.";  
    return (
       <section>
           <div className="homeSlider">
             <Container>
               <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row justify-content-between align-items-center">
                      <div className="col-lg-6">
                        <div className="sliderDetail">
                          <h1 className="sliderName">Xiaomi Smart Watch</h1>
                          <p className="sliderDetail">{ sliderDesc.slice(0, 221) }...</p>
                          <button className="regularBtn">Shop Now</button>
                         </div>
                      </div>
                      <div className="col-lg-5">
                         <img width="100" height="400px" src="https://i.ibb.co/SVZcvq8/Fitbit-Versa-2-Smartwatch-Black-1024x1024-1.png" className="d-block w-100" alt="sliderImage" />
                      </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row justify-content-between align-items-center">
                      <div className="col-lg-5">
                         <img width="100" height="400px" src="https://i.ibb.co/XJ2WDd0/779-7796559-denver-sw-160-denver-smartwatch-2.png" className="d-block w-100" alt="sliderImage" />
                      </div>
                      <div className="col-lg-6">
                        <div className="sliderDetail">
                          <h1 className="sliderName">Digital Fashion Watch</h1>
                          <p className="sliderDetail">{ sliderDesc.slice(0, 221) }...</p>
                          <button className="regularBtn">Shop Now</button>
                         </div>
                      </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row justify-content-between align-items-center">
                      <div className="col-lg-6">
                        <div className="sliderDetail">
                          <h1 className="sliderName">Digital Gaming Watch</h1>
                          <p className="sliderDetail">{ sliderDesc.slice(0, 221) }...</p>
                          <button className="regularBtn">Shop Now</button>
                         </div>
                      </div>
                      <div className="col-lg-5 sliderImg">
                         <img width="100" height="400px" src="https://i.ibb.co/L9Sn60z/316-3163883-smartwatches-smartwatch.png" className="d-block w-100" alt="sliderImage" />
                      </div>
                      </div>
                    </div>
               
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
            </Container>
           </div>
       </section>
    );
};

export default Slider;