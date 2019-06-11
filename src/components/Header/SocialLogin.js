import React, { Component } from 'react';
//import './App.css';
import './SocialLogin.css';

class SocialLogin extends Component {
  render() {
    return (
      <div className="social-login">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        
        <div><a href="javascript:void(0);" class="navicon" onclick="OpenNav()">Menu</a></div>

        <div className="social-media">
          <span id="followUS">Follow US </span>
          <a href="http://www.facebook.com" target="_blank" className="fa fa-facebook"></a>
          <a href="http://www.twitter.com" target="_blank" className="fa fa-twitter"></a>
          <a href="http://www.instagram.com" target="_blank" className="fa fa-instagram"></a>
        </div>
        <div><a href="#" >Login</a></div>
      </div>
    );
  }
}

export default SocialLogin;