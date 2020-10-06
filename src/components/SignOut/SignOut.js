import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SignOut.css';
class SignOut extends Component {


    render() {
        return(
            <div className='sign-out centerText'>
                <Link to='/' >
                    Sign Out
                </Link>
               
            </div>
        );
    }
}

export default SignOut