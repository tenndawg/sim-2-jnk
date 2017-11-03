import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import '../css/dashboard.css';

class Dashboard extends Component {
    render() {
        return(    
            <div className='body'>
                <div className='top_bar'></div>
                <div className='buttonBox'>
                    <div className='divBox'>
                        <p className='colorBox'><b>Add New Property</b></p>

                        <p className='desiredRent'>List properties with "desired rent" greater than: $ </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;