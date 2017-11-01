import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import Main from './components/Main';
import homePageHouser from './components/homePageHouser';
import { BrowserRouter, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <homePageHouser />
        <Main />
        <Dashboard />
      </div>
    );
  }
}

export default App;
