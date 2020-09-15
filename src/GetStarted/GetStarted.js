import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './GetStarted.css';
//import  from '../';

class GetStarted extends Component {


    render() {
        return(
            <div className='home-controls centerText'>
                <Link to='/sign-up'><h3>Let's get started!</h3></Link>
                <p>Already have an account?</p>
                <Link to='/login'>
                    Login 
                </Link>
            </div>
        );
    }
}

export default GetStarted