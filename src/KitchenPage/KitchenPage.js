import React, { Component } from 'react'
import './KitchenPage.css';
import Header from '../Header/Header';
// import Help from '../Help/Help';
import SignOut from '../SignOut/SignOut';
import {Link} from 'react-router-dom';


class KitchenPage extends Component {

    render() {
        return(
            <div className='container'>
               <div className='head'>
                <Header/>
                {/* <h2>ePantry</h2>
                <Help/>  */}
               </div>
               <ul className='kitchen-controls centerText' >
                   <li><Link to='/add-ingredient'className='kitchen-button centerText'>Add</Link></li>
                   <li><Link to='/epantry' className='kitchen-button centerText'>View</Link></li>
                   <li><Link to= '/expired' className='kitchen-button centerText'>Expired</Link></li>
               </ul>  
               <SignOut/>
            </div>
        );
    }
}

export default KitchenPage