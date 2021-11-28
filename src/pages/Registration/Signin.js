import React from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../CustomHooks/useAuth';

const Signin = () => {
        // Import useAuth
        const { user, error, loading, savedUser, handleSignin, handleGoogleSignin, handleGithubSignin } = useAuth();

        const location = useLocation();
        const history = useHistory();
        const redirectUrl = location.state?.from || '/home';
        // const redirectUrl = redirectPath.pathname;
        // console.log(redirectUrl);
        if(user.email) {
            history.replace(redirectUrl);
        }
        
        
        // Handle google signin
        const handleGoogleLogin = () =>  {
              
              handleGoogleSignin()
              .then(res => {
                    const user = res.user;
                    savedUser(user.email, user.displayName, 'PUT');
                    history.replace(redirectUrl);
              })
        }
        
        // Handle github signin
        const handleGithubLogin = () =>  {
              
              handleGithubSignin()
              .then(res => {
                    const user = res.user;
                    savedUser(user.email, user.displayName, 'PUT');
                    history.replace(redirectUrl);
              })
        }

        const { register, handleSubmit } = useForm();
        const onSubmit = data => {
            
              const email = data.email;
              const password = data.password;
                  handleSignin( email, password);

        }
        
    return (
        <section>
         <div className="acountSection">
            <div className="container">
            { error && <Alert>
                        <h1 className="heading">{error}</h1>
                </Alert>}
                { !loading && <div className="accountForm">
                    <h1 className="heading">Signin Now</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input id="inputField" type="email" placeholder="Enter your email" {...register("email", { required: true })} /> <br />
                        <input id="inputField" type="password" placeholder="Enter your password" {...register("password", { required: true })} /> <br />
                        <input id="formBtn" type="submit" value="Signin" />
                    </form>

                    <span className="anotherWay">Have no account ? <Link to="/signup">Signup</Link></span> <br />
                    <span className="anotherWay">or signin with</span> <br />
                    <span onClick={ handleGoogleLogin} className="thirdApi fab fa-google"></span>
                    <span className="thirdApi fab fa-facebook"></span>
                    <span onClick={ handleGithubLogin} className="thirdApi fab fa-github"></span>
                </div>}
                { loading && <Spinner animation="border" variant="info" />}
     
            </div>
        </div>
    </section>
    );
};

export default Signin;