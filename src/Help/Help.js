import React, { Component } from 'react'
import './Help.css';
//import  from '../';

class Help extends Component {

    render() {
        return(
            <div className='container'>
               <h4>Need help?</h4>
               <div class='hidden'>
                   <h3>Add</h3>
                   <p>Click 'Add' to add ingredients to your ePantry.</p>
                   <h3>View</h3>
                   <p>Click 'View' to view and edit all of your ingredients in your ePantry.</p>
                   <h3>Expired</h3>
                   <p>Click 'Expired' to view and edit when you are cleaning out expired items. </p>
               </div>
              
            </div>
        );
    }
}

export default Help