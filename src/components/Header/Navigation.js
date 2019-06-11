import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Logo from './Logo';
import Home from '../Home';
import Profile from '../Profile';
import About from '../About';
import Find from '../Find';
import Register from '../Register';
//import './App.css';

class Navigation extends Component {
  render() {
    return (
      <div>
          <Router>
            <ul>            
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">My Profile</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/find">Find Athletes</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
            <Logo />
            <Route exact path={"/"} component={Home} />
              <Route path={"/profile"} component={Profile} />
              <Route path={"/about"} component={About} />
              <Route path={"/find"} component={Find} />
              <Route path={"/register"} component={Register} />
          </Router>
      </div>
    );
  }
}

export default Navigation;