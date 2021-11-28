import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import Logo from '../../../logo.png';
import useAuth from '../../../CustomHooks/useAuth';
import Button from '@restart/ui/esm/Button';

const Header = () => {

      // Import useAuth
      const { user, handleSignOut } = useAuth();

      // Use useHistory for changing the route
      const history =  useHistory();

      // Handle account route 
      const handleAccount = () => {
          history.replace('/signin');
      }

      const handleLogout = () => {
        handleSignOut();
        history.replace('/signin');
      }
    return (
        <section>
            <header>
                <div className="headerSection">
                <Navbar expand="lg">
                    <Container>
                        <NavLink to="/"><img width="40" height="40" src={Logo} alt="siteLogo" /><span className="siteName">Wow Watch</span></NavLink>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="navMenu" to="/home">Home</NavLink>
                            <NavLink className="navMenu" to="/watches">Watches</NavLink>
                            {
                                user.email ?  <NavLink className="navMenu" to="/dashboard">DashBoard</NavLink> : <></>
                            }
                        </Nav>
                        {
                        user.email ? <span className="userAccount" >
                            <img width="40" height="40" className="roubded-circle" src={ user.photoURL } alt="userAvatar" />
                            <div className="userInfo">
                                <img width="40" height="40" className="roubded-circle" src={ user.photoURL } alt="userAvatar" />
                                <h2 className="heading">{ user.displayName }</h2>
                                <Button className="buyBtn" onClick={ handleLogout }>Log Out</Button>
                            </div>
                        </span> : <span className="userAccount" onClick={ handleAccount }>
                        <NavLink className="navMenu" to="/login">Account</NavLink>
                        </span>
                        }

                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
                </div>
            </header>
        </section>
    );
};

export default Header;