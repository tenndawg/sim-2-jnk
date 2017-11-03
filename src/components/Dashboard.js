import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import navicon from '../images/navicon.png';
import '../css/dashboard.css';
import '../index.css';

class Dashboard extends Component {
    render() {
        return(    
            <div className="Dashboard__container">
                <div className='top_bar'>
                    <div className='Header__child'>
                        <img src={ navicon } />
                        <span className='Header__left_span open-sans-bold'>Houser</span>
                    </div>
                </div>
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