import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import  routes  from './routes';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <button>
        <Link to='/wizard'>
        Add New Property
        </Link>
        </button>
        {routes}
      </div>
    );
  }
}

export default App;
