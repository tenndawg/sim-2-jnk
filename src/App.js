import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// This is the list of Page Components Routing for display
import homePageHouser from './components/homePageHouser';
import Dashboard from './components/Dashboard';

// css used to control the index route page component
import './index.css';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="body">
            <Switch>
                {/* This is the path to the "Add New Property" Dashboard */}
                <Route path='/dashboard' component={ Dashboard }/>
                {/* Root or Home Router should alway be place at bottom to filter
                out bad links. "exact" is not used to improve the filter of links entered */}
                <Route path='/' component={ homePageHouser }/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;