import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// BrowserRouter
// To add the ability to add routing functionality
// Switch
// Checks provided paths and stops checking all as soon as it finds a match
// Route
// Renders components based on the URL

// Home page

import Navgation from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Youtube from "./Components/Youtube/Youtube"

// Pages
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
import Productpage from "./Pages/Productpage/Productpage";

// import "./App.css";

import "./css/bootstrap.css";
import "./css/styles.css";

function App() {
  return (
    <Router>
      <div>
      <Nav/>
         < Navgation/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/iphone" exact component={Iphone} />
          <Route path="/iphone/:pid" exact component={Productpage} />
          <Route path="/mac" exact component={Mac} />
          <Route path="/" component={Four04} />
        </Switch>
        <Youtube/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

