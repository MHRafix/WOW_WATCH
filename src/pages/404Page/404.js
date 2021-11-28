import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import Banner404 from '../../404Banner.png';
import useAuth from '../../CustomHooks/useAuth';

const NotFoundPage = () => {

    const {user, admin} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';
    if(user.email && admin) {
        history.replace(redirectUrl);
    }
    
    const handleNotFoundBtn = () => {
          history.replace('/');
    }

    
    return (
        <section>
            <div className="notFoundPage">
                <img src={Banner404} alt="404Banner" />  <br /><br />
                <Button className="buyBtn" onClick={ handleNotFoundBtn }>Back To Home</Button>
            </div>
        </section>
    );
};

export default NotFoundPage;