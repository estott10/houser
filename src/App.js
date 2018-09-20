import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';
import Header from './component/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
      <Dashboard></Dashboard>
      <Wizard></Wizard>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
