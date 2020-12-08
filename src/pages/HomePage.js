import React, { Component } from 'react'
import '../styles/dist/Home.css';
import {Link} from 'react-router-dom';
class HomePage extends Component {
    render() {
        return(
            <div className='home-container'>
               <div>
                   <h2>Use What You Have.</h2><h2>Buy What You Need.</h2>
               </div>
               <div className='home-controls'>
                    <Link to='/register'><h3>Let's get started!</h3></Link>
                    <p>Already have an account?</p>
                    <Link to='/login'>
                        Login 
                    </Link>
                </div>
            </div>
        );
    };
};

export default HomePage;