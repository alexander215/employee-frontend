import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Register from './Register';
import Login from './Login';
import EmployeeContainer from './EmployeeContainer';
import './App.css';

const My404 = () => {
  return (
    <div>
      <h2>You shall not pass!!!</h2>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={ LandingPage } />
          <Route exact path='/employees' component={ EmployeeContainer } />
          <Route component={My404} />
        </Switch>
      </main>
    )
  }
}

export default App;
