import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

// Image support for the "homePageHouser"
import HOUSE_ICON from '../images/houseICON.png';

// css used to control the homePageHouser route page component
import '../css/homePageHouser.css';

class SHELFIE_HOME extends Component {
    render() {
        return(
            <div className='login_Body' >

                <div className='login_Body_Image'>
                    <img src={ HOUSE_ICON } alt='Houser Logo Icon' />
                </div>

                <div className='login_ICON_Text'>
                    Houser
                </div>

                <div className='login_Form'>
                    &nbsp; Username:
                    <br/>
                    <input className='userButtonBox'
                        type='text'
                        /* Spaces '&nbsp;&nbsp;' added for better readability
                        of text in the input space */
                        value='&nbsp;&nbsp; Clint Eastwood'
                    /> 
                    <br/><br/>
                    &nbsp; Password:
                    <br/>
                    <input className='passButtonBox'
                        type='text'
                        /* Spaces '&nbsp;&nbsp;' added for better readability
                        of text in the input space */
                        value='&nbsp;&nbsp; &bull;&bull;&bull;&bull;&bull;&bull;'
                    /> 
                </div>
                <div className='logRegButtons' >
                    <Link to='./Dashboard'>
                        <button
                            className='userButton'
                           
                            >
                            Login
                        </button>
                    </Link>
                    <Link to='./'>
                        <button
                            className='passButton'
                            
                            >
                            Register
                        </button>
                    </Link>
                </div>
                    
            </div>
        );
    }
}

export default SHELFIE_HOME;