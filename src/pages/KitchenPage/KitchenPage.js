import React, { Component } from 'react'
import './KitchenPage.css';
import {Link} from 'react-router-dom';
import IngredientContext from '../../contexts/IngredientContext'

class KitchenPage extends Component {
    static contextType = IngredientContext
    render() {
        console.log(this.context)
        return(
            <div className='container'>
               <ul className='kitchen-controls centerText' >
                   <li><Link to='/add-ingredient'className='kitchen-button centerText'>Add</Link></li>
                   <li><Link to='/epantry' className='kitchen-button centerText'>View</Link></li>
                   <li><Link to= '/expired' className='kitchen-button centerText'>Expired</Link></li>
               </ul>  
            </div>
        );
    }
}

export default KitchenPage