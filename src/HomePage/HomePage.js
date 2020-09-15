import React, { Component } from 'react'
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';

import './HomePage.css';
import GetStarted from '../GetStarted/GetStarted';
class HomePage extends Component {



    render() {
        return(
            <div className='container'>
               <NavBar/>
               <Header/>
               <div className ='slogan centerText'>
                   <h2>Use What You Have.<br/>Buy What You Need.</h2>
               </div>
               
                <GetStarted/>
               
            </div>
        );
    }
}

export default HomePage