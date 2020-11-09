import React, { Component } from 'react';
import './KitchenPage.css';
import {Link} from 'react-router-dom';
import IngredientContext from '../../contexts/IngredientContext';

class KitchenPage extends Component {
    static contextType = IngredientContext;
    render() {
        return(
            <div className='container'>
               <ul className='kitchen-controls centerText' >
                   <li><Link to='/add-ingredient'className='kitchen-button centerText'>Add</Link></li>
                   <li><Link to='/pantry' className='kitchen-button centerText'>Pantry</Link></li>
                   <li><Link to= '/expired' className='kitchen-button centerText'>Expired</Link></li>
               </ul>  
            </div>
        );
    };
};

export default KitchenPage;