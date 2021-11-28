import './Css/GlobalCss.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './pages/SharedComponents/Header/Header';
import Home from './pages/HomePage/Home';
import Footer from './pages/SharedComponents/Footer/Footer';
import Watches from './pages/ProductsPage/Watches';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import SingleWatch from './pages/SingleWatch/SingleWatch';
import Signup from './pages/Registration/Signup';
import Signin from './pages/Registration/Signin';
import AuthProvider from './Context/AuthProvider';
import NotFoundPage from './pages/404Page/404';
import Payment from './pages/UserDashboard/Payment/Payment';
import MyOrders from './pages/UserDashboard/MyOrders/MyOrders';
import AddReview from './pages/UserDashboard/Reviews/AddReview';
import AllOrders from './pages/UserDashboard/AllOrders/AllOrders';
import Dashboard from './pages/UserDashboard/Dashboard';
import AddAdmins from './pages/UserDashboard/AddAdmins/AddAdmins';
import AddWatch from './pages/UserDashboard/AddWatches/AddWatch';
import AllWatch from './pages/UserDashboard/AllWatches/AllWatch';
import AdminRoute from './pages/PrivateRoute/AdminRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header />
       <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route exact path="/home">
           <Home />
         </Route>
         <Route exact path="/watches">
           <Watches />
         </Route>
         <Route exact path="/signin">
           <Signin />
         </Route>
         <Route exact path="/signup">
           <Signup />
         </Route>
         <PrivateRoute exact path="/watches/singleWatch/watch_uniqueId/:uniqueId">
           <SingleWatch />
         </PrivateRoute> 
         <PrivateRoute exact path="/myorders">
           <MyOrders />
         </PrivateRoute>
         <PrivateRoute exact path="/pay">
           <Payment />
         </PrivateRoute>
         <PrivateRoute exact path="/dashboard">
           <Dashboard />
         </PrivateRoute>
         <PrivateRoute exact path="/addReviews">
           <AddReview />
         </PrivateRoute>
         <AdminRoute exact path="/allOrders">
           <AllOrders />
         </AdminRoute> 
         <AdminRoute exact path="/addAdmins">
           <AddAdmins />
         </AdminRoute> 
         <AdminRoute exact path="/allWatches">
           <AllWatch />
         </AdminRoute> 
         <AdminRoute exact path="/addWatch">
           <AddWatch />
         </AdminRoute> 
         
          <Route path="*">
           <NotFoundPage />
         </Route>
         
       </Switch>
       <Footer />
      </BrowserRouter>
      </AuthProvider>   
    </div>
  );
}

export default App;
