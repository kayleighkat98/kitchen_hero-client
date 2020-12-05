import React, { Component } from 'react'
import '../styles/dist/Home.css';
import GetStarted from '../components/GetStarted';
class HomePage extends Component {
    render() {
        return(
            <div className='container'>
               <div className ='slogan center'>
                   <h2>Use What You Have.</h2><h2>Buy What You Need.</h2>
               </div>
                <GetStarted/> 
            </div>
        );
    };
};

export default HomePage;