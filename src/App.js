import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>LinkedIn Profile Editor</h1>
        <img src='https://randomuser.me/api/portraits/women/50.jpg' />
        <p>Name: Alice Jones</p>
      </div>
    );
  }
}

export default App;
