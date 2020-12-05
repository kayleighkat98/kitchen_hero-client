import React, { Component } from 'react';
import '../../styles/dist/Kitchen.css';
import {Link} from 'react-router-dom';
import IngredientContext from '../../contexts/IngredientContext';

class KitchenPage extends Component {
    static contextType = IngredientContext;
    render() {
        return(
            <div>
               <ul className='kitchen-controls' >
                   <li><Link to='/add-ingredient'>Add</Link></li>
                   <li><Link to='/pantry'>Pantry</Link></li>
                   <li><Link to= '/expired'>Expired</Link></li>
               </ul>  
            </div>
        );
    };
};

export default KitchenPage;