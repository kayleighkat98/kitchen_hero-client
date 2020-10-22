import React, { Component } from 'react'

import './HomePage.css';
import GetStarted from '../../components/GetStarted/GetStarted';
class HomePage extends Component {
    render() {
        return(
            <div className='container'>
               <div className ='slogan centerText'>
                   <h2>Use What You Have.<br/>Buy What You Need.</h2>
               </div>
                <GetStarted/> 
            </div>
        );
    }
}

export default HomePage