import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./home";
import Login from "./components/login";
import Signup from "./components/signup";
import TestApi from "./components/testapi";
import NavbarDef from "./components/reusables/navbardef";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <NavbarDef></NavbarDef>
          <br></br>
          <div className="content">
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/test" component={TestApi}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
