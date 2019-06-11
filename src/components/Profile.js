import React, { Component } from 'react';
import axios from 'axios';
//import './App.css';

class Profile extends Component {
  state = {
    playerAttributes: [],
  };
  componentDidMount(){
    axios.get('http://localhost:5000/api/profile?id=22')
    .then(res => {
      this.setState({playerAttributes: res.data.result});
      //console.log(res.data.result);
    });
  }

  render() {
    return(
      <div>
        <h1>Player Info</h1>
        <ul>
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.name}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.highschool}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.email}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.city}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.state}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.zip}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.highschool}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.gradYear}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.gpa}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.sat}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.act}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.major}</li>))}
        </ul>
        <h1>Sport Info</h1>
        <ul>
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.sport}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.sport2}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.primaryPosition}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.secondaryPosition}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.travelTeam}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.height}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.weight}</li>))}
        </ul>
        <p>When you become committed to a college, please send us an email at kprestano@athleticprospects.com</p>
        <h4>Videos</h4>
        <p>Video 1</p>
        <p>Video 2</p>
        <p>Video 3</p>
        <h4>References</h4>
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.ref1Name}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.ref1JobTitle}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.ref1Email}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.ref1Phone}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.ref2Name}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.ref2JobTitle}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.ref2Email}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.ref2Phone}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.ref3Name}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.ref3JobTitle}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.ref3Email}</li>))}
          {this.state.playerAttributes.map(players => (<li key={players.id}>{players.ref3Phone}</li>))}

      </div>
    );
  }
}

export default Profile;