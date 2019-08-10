import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// ^^This is from the tutorial
import LandingPage from './LandingPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <Route exact path='/' component={ LandingPage } />
      </main>
    )
  }
}

export default App;
