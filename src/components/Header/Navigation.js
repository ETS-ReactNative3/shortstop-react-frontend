import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import Search from './Search';
import Logo from './Logo';
import Home from '../Home';
import Profile from '../Profile';
import About from '../About';
import Find from '../Find';
import Register from '../Register';
import Login from '../Login';
//import './App.css';

class Navigation extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div><a href="" className="navicon" >Menu</a></div>
        <div className="social-media">
          <span id="followUS">Follow US </span>
          <a href="http://www.facebook.com" target="_blank" className="fa fa-facebook"></a>
          <a href="http://www.twitter.com" target="_blank" className="fa fa-twitter"></a>
          <a href="http://www.instagram.com" target="_blank" className="fa fa-instagram"></a>
        </div>
        <Router>
          <ul>
            <li><Link to="/login">Login</Link></li>
          </ul>
          <Search />
          <ul>            
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/find">Find Athletes</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
          <Logo />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/profile"} component={Profile} />
            <Route path={"/about"} component={About} />
            <Route path={"/find"} component={Find} />
            <Route path={"/register"} component={Register} />
            <Route path={"/login"} component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Navigation;