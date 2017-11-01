import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import homePageHouser from './homePageHouser';
import Dashboard from './Dashboard';

class Main extends Component {
    
    
    render() {
        return(
        <main>
            <Switch>
            <Route exact path='/' component={homePageHouser}/>
            <Route path='/dashboard' component={Dashboard}/>
            </Switch>
        </main>
        );
    }
}

export default Main;