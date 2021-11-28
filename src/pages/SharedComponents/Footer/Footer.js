import React from 'react';
import './Footer.css';
import Logo from '../../../logo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
       <section className="footerSection">
           <div className="footerArea">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-3 col-md-3 col-sm-3">
                           <div className="firstFooterBox">
                               <div className="logo">
                        <NavLink id="Logo" to="/"><img width="40" height="40" src={Logo} alt="siteLogo" /><span className="siteName">Wow Watch</span></NavLink>
                        <p className="themeDesc">We're a online watch seller service provider. We try to provide the best product to our customer. thank you.</p>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-3 col-sm-3">
                           <div className="secondFooterBox">
                    <div className="footerNavbar">
                    <h3 className="itemName">Pages</h3>
                            <NavLink className="navMenu2" to="/home">Home</NavLink>
                            <NavLink className="navMenu2" to="/watches">Watches</NavLink>
                            <NavLink className="navMenu2" to="/signin">Account</NavLink>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-3 col-sm-3">
                           <div className="secondFooterBox">
                    <div className="footerNavbar">
                    <h3 className="itemName">Address</h3>
                       <span className="add">Address : Lakshmipur, Bangladesh</span>
                       <span className="add">Mobile : 01611859722</span>
                       <span className="add">Web : <a href="https://rafix.netlify.app" target="blank">Rafix</a></span>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-3 col-sm-3">
                           <div className="secondFooterBox">
                    <div className="footerNavbar">
                    <h3 className="itemName">Brances</h3>
                       <span className="add">Lakshmipur</span>
                       <span className="add">Dhaka</span>
                       <span className="add">Chattogram</span>
                       <span className="add">Feni</span>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default Footer;