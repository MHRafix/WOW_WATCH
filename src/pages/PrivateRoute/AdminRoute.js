import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../CustomHooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
     const {user, admin} = useAuth();
    
    return (
        <Route
        {...rest}
        render={({ location }) => user.email && admin ? children
           : <Redirect
        to={
            {
                pathname:"/404Error",
                state: { from: location }
            }
        }    />
}
        />
    );
};

export default AdminRoute;