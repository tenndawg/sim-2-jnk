import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import Main from './components/Main';
import homePageHouser from './components/homePageHouser';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './app.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="body">
          <Route exact path='/' component={homePageHouser}/>
          <Route path='/dashboard' component={Dashboard}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
