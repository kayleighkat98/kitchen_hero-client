import React, { Component } from 'react'
import './AboutPage.css';
import GetStarted from '../../components/GetStarted/GetStarted';

class AboutPage extends Component {
    render() {
        return(
            <div className='container'>
                <div className='center about'>
                    <p>Let's face it. We don't always remember what we have in our fridge. This means that sometimes we have to face terribly rotten food when deep cleaning. Wouldn't it be nice to have an easy reference for what has expired in your pantry and fridge?</p><p>Introducing Kitchen-Hero.</p>
                    <p>Log in to add the ingredients you have and if/when they expire. If you are a returning user, take a look to see if any of your items have expired and throw them away before they get moldy!</p>
                </div>
                <div className='controls'>
                    <GetStarted/>
                </div>
                <div className='center'>
                    <p>Demo Username: guest / Demo Password: Password!1</p>
                </div>
            </div>
        );
    };
};

export default AboutPage;