import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../CustomHooks/useAuth';
import Dashboard from '../Dashboard';
const Payment = () => {
        // Take history for changing the route of the app
        const history = useHistory();

        // Import use auth
        const { user, admin } = useAuth();
        
         // Prevent admins from the normal user route
         if(user?.email && admin){
            history.replace('/dashboard');
         }

         
    return (
        <div className="wrapper">
            <div className="container">
                <Dashboard />
            <h2 className="heading">Payment method is cooming soon!</h2>
        </div>
     </div>
    );
};

export default Payment;