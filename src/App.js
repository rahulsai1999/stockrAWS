import React, { Component } from 'react';
import {Route , HashRouter} from "react-router-dom";
import Home from "./home";
import Login from "./components/login";
import Signup from "./components/signup";
import NavbarDef from "./components/reusables/navbardef";
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
          <NavbarDef></NavbarDef>
          <div className="content">
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
