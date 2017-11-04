import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import homePageHouser from './components/homePageHouser';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './index.css';

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
