import React, { Component } from 'react'
import '../styles/dist/About.css';
import {Link} from 'react-router-dom';

class AboutPage extends Component {//LEARN MORE ABOUT THE WEBSITE
    render() {
        return(
            <div className='about-container'>
                <div className='about'>
                    <p>Let's face it. We don't always remember what we have in our fridge. This means that sometimes we have to face terribly rotten food when deep cleaning. Wouldn't it be nice to have an easy reference for what has expired in your pantry and fridge?</p><p>Introducing Kitchen-Hero.</p>
                    <p>Log in to add the ingredients you have and if/when they expire. If you are a returning user, take a look to see if any of your items have expired and throw them away before they get moldy!</p>
                </div>
                <div className='home-controls'>
                    <Link to='/register'><h3>Let's get started!</h3></Link>
                    <p>Already have an account?</p>
                    <Link to='/login'>
                        Login 
                    </Link>
                </div>
                <div>
                    <p>Demo Username: guest / Demo Password: Password!1</p>
                </div>
            </div>
        );
    };
};

export default AboutPage;