import React, { Component } from 'react'
import './KitchenPage.css';
import Header from '../Header';
import Help from '../Help/Help';
import SignOut from '../SignOut';
import {Link} from 'react-router-dom';


class KitchenPage extends Component {

    render() {
        return(
            <div className='container'>
               <div class='head'>
                <Header/>
                <h2>ePantry</h2>
                <Help/> 
               </div>
               <ul className='controls'>
                   <Link to='/add-ingredient'><button>Add</button></Link>
                   <Link to='/epantry'><button>View</button></Link>
                   <Link to= '/expired'><button>Expired</button></Link>
               </ul>  
                <SignOut/>
            </div>
        );
    }
}

export default KitchenPage