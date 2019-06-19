import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    } 
    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
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
    handleSubmit = event => {
        event.preventDefault();
        if(!this.validateForm()){
            alert('Both Fields Are Required For Login');
        }
        else{
            var apiBaseUrl = "http://localhost:5000/api/";
            
            axios.get(apiBaseUrl+'playerlogin', {
                params: {
                    username: this.state.username,
                    password: this.state.password
                }
            })
            .then(function (response) {
                console.log(response.data);

                if(response.data.code === 200){
                    console.log("Login successfull");
                }
                else if(response.data.code === 204){
                    console.log("Username password do not match");
                    alert("username password do not match")
                }
                else{
                    console.log("Username does not exist");
                    //alert("Username does not exist");
                }
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
        }
    }
    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                        <input type="text" value={this.state.value} onChange={this.handleChangeUsername} />
                    <label>Password: </label>
                        <input type="password" value={this.state.password.value} onChange={this.handleChangePassword} />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;