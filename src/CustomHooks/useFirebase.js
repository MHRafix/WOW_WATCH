import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseInitialization from '../FirebaseInfo/Firebase.init';

firebaseInitialization();
const useFirebase = () => {
    
    // Loading the systems
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    // Take a state for storing the user in the state
    const [user, setUser] = useState({});

    // Take auth provider
    const auth = getAuth();
    
    // Handle manualy registration using email and password
    const handleRegistration = ( email, password, displayName) => {
          setLoading(true);
        createUserWithEmailAndPassword(auth, email, password, displayName)
        .then((userCredential) => {
            setError('');
            const newUser = {email, password, displayName};
            setUser(newUser);

            // Pass the user info in the database 
            savedUser(email, displayName, 'POST');

            // Update user info
            updateProfile(auth.currentUser, {
                displayName: displayName
              }).then(() => {
             
              }).catch((error) => {
               
              });
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          })
          .finally(() => setLoading(false));
    }

    // Handle manualy login using email and password
    const handleSignin = ( email, password) => {
          setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
              setError('');
          })
          .catch((error) => {
              const errorMessage = error.message;
              setError(errorMessage);
            // ..
          })
          .finally(() => setLoading(false));
    }


    // Make provider here
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Handle google signin using firebase api
    const handleGoogleSignin = () => {
          return signInWithPopup(auth, googleProvider);
    }

    // Handle github signin using firebase api
    const handleGithubSignin = () => {
          return signInWithPopup(auth, githubProvider);
    }


  

    // Use effect for handle changing user 
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
               setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])
    
    // Use useEffect for checking the user is admin or not
    useEffect(() => {
        fetch(`https://sheltered-reef-45281.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin));
            setLoading(false);
    }, [user.email]);

    // Save user info to the data base
    const savedUser = (email, displayName, method) => {
          const user =  {email, displayName};
          fetch('https://sheltered-reef-45281.herokuapp.com/users', {
              method: method,
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(user)
          })

          .then()
          setLoading(false);
    }
    

      // Handle signout
      const handleSignOut = () => {
        setLoading(true);
        signOut(auth)
        .then(() => {
            setUser({});
        }).catch((error) => {

        })
        .finally(() => setLoading(false));
    }
    
    return {
        loading,
        savedUser,
        handleGoogleSignin,
        handleGithubSignin,
        handleRegistration,
        handleSignOut,
        handleSignin,
        user,
        admin,
        error
        
    }
};

export default useFirebase;