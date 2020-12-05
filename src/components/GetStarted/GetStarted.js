import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class GetStarted extends Component {
    render() {
        return(
            <div className='home-controls center'>
                <Link to='/register'><h3>Let's get started!</h3></Link>
                <p>Already have an account?</p>
                <Link to='/login'>
                    Login 
                </Link>
            </div>
        );
    };
};
export default GetStarted;