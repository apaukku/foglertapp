import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Weather from './Weather';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/g/:location' component={Weather}/>
        </div>
      </Router>
    );
  }
}

export default App;
