import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather/>
      </div>
    );
  }
}

export default App;
