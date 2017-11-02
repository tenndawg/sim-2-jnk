import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import homePageHouser from './homePageHouser';
import Dashboard from './Dashboard';

class Main extends Component {
    
    
    render() {
        return(
        <main>
            <BrowserRouter>
            <div>
                <Route exact path='/' component={homePageHouser}/>
                <Route path='/dashboard' component={Dashboard}/>
            </div>
            </BrowserRouter>
        </main>
        );
    }
}

export default Main;