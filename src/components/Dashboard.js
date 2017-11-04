import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import navicon from '../images/navicon.png';
import '../css/dashboard.css';
import '../index.css';

class Dashboard extends Component {
    render() {
        return(    
            <div className='Dashboard__container'>
                <div className='top_bar'>
                    <div className='Header__child'>
                        <div className="Header__left_container">
                            <img src={ navicon } />
                            <span className='Header__left_span open-sans-bold'>Houser</span>
                            <span className='Header__left_span open-sans'>Dashboard</span>
                        </div>
                        <div className='Header__right_container'>
                            <span className='Header__right_span bold'>Logout</span>
                        </div>
                    </div>
                </div>
                <button className="Dashboard__button_new lightest_green_bgc open-sans-bold">Add new property</button>
                    <div className="Filter__container">
                        <span className="open-sans Filter__description">List properties with "desired rent" greater than: $</span>
                        <input className="open-sans dark_green_border Filter__input" placeholder="0" value="" />
                        <button className="open-sans lightest_green_bgc Filter__btn"> Filter </button>
                        <button className="open-sans darkest_green_bgc Filter__btn Filter__btn_reset"> Reset </button>
                    </div>
                    <div className="Dashboard__homeSpan_container"><span className="open-sans-bold"> Home Listings </span></div>
                    <div className="Dashboard__properties_container"></div>
            </div>
        );
    }
}

export default Dashboard;