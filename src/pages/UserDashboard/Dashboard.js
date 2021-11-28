import Button from '@restart/ui/esm/Button';
import React from 'react';
import useAuth from '../../CustomHooks/useAuth';
import { Link, useHistory } from "react-router-dom";

const Dashboard = () => {

    const { admin, handleSignOut } = useAuth();
    const history = useHistory();

    const handleLogout = () => {
      handleSignOut();
      history.replace('/signin');
    }
    return (
      <section>
          <div className="dashborad">
              <div className="dashBoardNav d-flex justify-content-center"> 
                  
                  
                  { admin ? <div className="adminUser">
                    <Link className="navMenu" to="/allOrders">All Orders</Link>
                    <Link className="navMenu" to="/addWatch">Add Watch</Link>
                    <Link className="navMenu" to="/allWatches">All Watches</Link>
                    <Link className="navMenu" to="/addAdmins">Add Admin</Link>
                  </div> : <div className="normalUser">
                    <Link className="navMenu" to="/pay">Pay</Link>
                    <Link className="navMenu" to="/myorders">My Orders</Link>
                    <Link className="navMenu" to="/addReviews">Reviews</Link>
                  </div> }
                  <Button onClick={ handleLogout } className="buyBtn">Logout</Button>
              </div>
             
                
          
              </div>
      </section>
    );
};

export default Dashboard;