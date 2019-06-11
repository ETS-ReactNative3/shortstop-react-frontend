import React, { Component } from 'react';
import SocialLogin from "./Header/SocialLogin";
import Search from "./Header/Search";
import Navigation from "./Header/Navigation";
//import './App.css';

class Header extends Component {
  render() {
    return (
      <div>
        <SocialLogin />
        <Search />
        <Navigation />
      </div>

    );
  }
}

export default Header;