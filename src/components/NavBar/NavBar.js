import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
//import  from '../';

class NavBar extends Component {


    render() {
        return(
            <div  className='nav'>
                <Link to='/'>
                    Home |
                </Link>

                <Link to='/about'>
                    About |
                </Link>

                <Link to='/sign-up'>
                    Sign Up |
                </Link>

                <Link to='/login'>
                    Login 
                </Link>
    
            </div>

        );
    }
}

export default NavBar