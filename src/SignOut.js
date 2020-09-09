import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SignOut extends Component {


    render() {
        return(
            <div className='sign-out'>
                <Link to='/'>
                    <button>Sign Out</button>
                </Link>
               
            </div>
        );
    }
}

export default SignOut