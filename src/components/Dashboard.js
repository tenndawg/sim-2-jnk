import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import navicon from '../images/navicon.png';
import '../css/dashboard.css';
import '../index.css';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal: ""
        }
        this.resetValue = this.resetValue.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }
    
    resetValue = () => {
        this.setState({inputVal:""})
        }
    
    updateInput = (inputVal) => { this.setState({inputVal})}

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
                            <a href="http://localhost:3000/">
                            <span className='Header__right_span bold'>Logout</span>
                            </a>
                        </div>
                    </div>
                </div>
                <button className="Dashboard__button_new lightest_green_bgc open-sans-bold">
                    <a href="http://localhost:3000/wizard">Add new property</a></button>
                <div className="Filter__container">
                    <span className="open-sans Filter__description">List properties with "desired rent" greater than: $</span>
                    <input 
                        id="reset"
                        className="open-sans dark_green_border Filter__input" 
                        placeholder="0" 
                        onChange={event => this.updateInput(event.target.value)}
                        type="text" 
                        value={this.state.inputVal} />
                    <button 
                        type="button" 
                        className="open-sans lightest_green_bgc Filter__btn"> Filter </button>
                    <button 
                        onClick={this.resetValue} 
                        type="button" 
                        className="open-sans darkest_green_bgc Filter__btn Filter__btn_reset"> Reset </button>
                </div>
                <div className="Dashboard__homeSpan_container"><span className="open-sans-bold"> Home Listings </span></div>
                <div className="Dashboard__properties_container"></div>
            </div>
        );
    }
}

export default Dashboard;