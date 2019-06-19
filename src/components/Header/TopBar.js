import React, { Component } from 'react';
import Login from '../login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import './App.css';
// import './SocialLogin.css';

class TopBar extends Component {
  render() {
    return (
      <div className="social-login">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        
        <div><a href="" className="navicon" >Menu</a></div>

        <div className="social-media">
          <span id="followUS">Follow US </span>
          <a href="http://www.facebook.com" target="_blank" className="fa fa-facebook"></a>
          <a href="http://www.twitter.com" target="_blank" className="fa fa-twitter"></a>
          <a href="http://www.instagram.com" target="_blank" className="fa fa-instagram"></a>
        </div>
          <ul>
            <li><Route path={"/login"} component={Login} /></li>
          </ul>
      </div>
    );
  }
}

export default TopBar;