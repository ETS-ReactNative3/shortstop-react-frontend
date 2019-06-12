import React, { Component } from 'react';
import axios from 'axios';
//import './App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            password2: ""
        };
    }
    validateForm() {
        //return this.state.username.length > 0 && this.state.password.length > 0 && this.state.password === this.state.password2;
        var bool = true;
        if(!this.state.username.length > 0){
            alert('Please select a username');
            bool = false;
        }
        else if(this.state.password !== this.state.password2){
            alert('Passwords do not match');
            bool = false;
        }
        else{
            return bool;
        }
    }
    handleChangeUsername = event => {
        this.setState({
            username: event.target.value,
        });
    }
    handleChangePassword = event => {
        this.setState({
            password: event.target.value,
        });
    }
    handleChangePassword2 = event => {
        this.setState({
            password2: event.target.value,
        });
    }
    handleSubmit = event => {
        event.preventDefault();
        if(this.validateForm()){
            alert('registering...' + this.state.username + this.state.password);
            var apiBaseUrl = "http://localhost:5000/api/";
            // var self = this;
            var payload={
                "username":this.state.username,
                "password":this.state.password
            }
            axios.post(apiBaseUrl+'register', payload)
            .then(function (response) {
                console.log(response);

                if(response.data.code === 200){
                    console.log("Login successfull");
                }
                else if(response.data.code === 204){
                    console.log("Username password do not match");
                    //alert("username password do not match")
                }
                else{
                    console.log("Username does not exists");
                    //alert("Username does not exist");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
  render() {
    return (
        <div className="register">
            <form onSubmit={this.handleSubmit}>
                <label>Username: </label>
                    <input type="text" value={this.state.username.value} onChange={this.handleChangeUsername} />
                <label>Password: </label>
                    <input type="password" value={this.state.password.value} onChange={this.handleChangePassword} />
                <label>Password Again: </label>
                    <input type="password" value={this.state.password.value} onChange={this.handleChangePassword2} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
  }
}

export default Home;