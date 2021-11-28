import React from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../CustomHooks/useAuth';

const Signup = () => {

   // Take registration and login method from useFirebase using useAuth
    const { user, error, loading, handleRegistration, handleGoogleSignin, handleGithubSignin } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';

    if(user.email) {
        history.replace(redirectUrl);
    }
    
    // Handle google signin
    const handleGoogleLogin = () =>  {
          
          handleGoogleSignin()
          .then(res => {
                history.replace(redirectUrl);
          })
    }
    
    // Handle github signin
    const handleGithubLogin = () =>  {
          
          handleGithubSignin()
          .then(res => {
                history.replace(redirectUrl);
          })
    }

    // Handle registration form and create user
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
          const displayName = data.displayName;
          const email = data.email;
          const password = data.password;
          const confirmPassword = data.cnfPassword;
        if(password !== confirmPassword) {
           alert('password and confirmPassword not matched!');
        }else {
            handleRegistration( email, password, displayName );
        }
    }

    return (
        <section>
            <div className="acountSection">
                <div className="container">
                { error && <Alert>
                        <h1 className="heading">{error}</h1>
                </Alert>}
                    { !loading && <div className="accountForm">
                        <h1 className="heading">Signup Now</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input id="inputField" type="text" placeholder="Enter your user name" {...register("displayName", { required: true })} /> <br />
                            <input id="inputField" type="email" placeholder="Enter your email" {...register("email", { required: true })} /> <br />
                            <input id="inputField" type="password" placeholder="Enter your password" {...register("password", { required: true })} /> <br />
                            <input id="inputField" type="password" placeholder="Re-enter your password" {...register("cnfPassword", { required: true })} /> <br />
                            <input id="formBtn" type="submit" value="Sign up" />
                      </form>

                        <span className="anotherWay">Have an account ? <Link to="/signin">Signin</Link></span> <br />
                        <span className="anotherWay">or signin with</span> <br />
                        <span onClick={ handleGoogleLogin } className="thirdApi fab fa-google"></span>
                        <span className="thirdApi fab fa-facebook"></span>
                        <span onClick={ handleGithubLogin } className="thirdApi fab fa-github"></span>
                    </div>}
                    { loading && <Spinner animation="border" variant="info" />}
                  
                </div>
            </div>
        </section>
    );
};

export default Signup;