import React, { component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Review from './components/pages/Review';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <React.Fragment>
        <Navbar />
        <Switch>
        <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path='/review' component={Review} />
          <Route path='/sign-up' component={SignUp} />
          <Route component={Default} />
        </Switch>
        <Modal />
         <Footer />
      </React.Fragment>
    </>
  );
}

export default App;