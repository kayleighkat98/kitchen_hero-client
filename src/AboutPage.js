import React, { Component } from 'react'
//import './';
import Header from './Header';
import Navbar from './NavBar/NavBar';

class AboutPage extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
            
    //     };
    // }

    render() {
        return(
            <div className='container'>
               <Navbar/>
               <Header/>
               <div className='paragraphs'>
                  <p>Kitchen-Hero was created to make the process of meal planning more budget friendly and easier than ever.</p> 
                  <br/>
                  <p>Have you ever had food go bad because you didn't use it in time? How about recipes you want to try, but didn’t want to go through the effort of buying every ingredient needed EVERY TIME?</p>
                  <br/>
                  <p>Kitchen-Hero allows you to keep track of the food that you buy/bought along with your favorite recipes and when you summon hero, Kitchen-Hero will generate a meal plan and shopping list tailored to your tastes and pantry!</p>
               </div>
               <div className='controls'>
                    <h3>Let's get started!</h3>
                    <p>Already have an account?</p>
                    <p>Sign In</p>
               </div>
            </div>
        );
    }
}

export default AboutPage