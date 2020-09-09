import React, { Component } from 'react'
import Header from './Header';
import NavBar from './NavBar/NavBar';
import {Link} from 'react-router-dom';

class HomePage extends Component {



    render() {
        return(
            <div className='container'>
               <NavBar/>
               <Header/>
               <div className ='slogan'>
                   <h2>Use What You Have.<br/>Buy What You Need.</h2>
               </div>
               <div className='controls'>
                    <Link to='/sign-up'><h3>Let's get started!</h3></Link>
                    <p>Already have an account?</p>
                    <Link to='/login'>
                        Login 
                    </Link>
               </div>
            </div>
        );
    }
}

export default HomePage