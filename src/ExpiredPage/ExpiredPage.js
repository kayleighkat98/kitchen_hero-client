import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ExpiredPage.css';
import Header from '../Header/Header';
import SignOut from '../SignOut/SignOut';

import ApiContext from '../ApiContext';

class ExpiredPage extends Component {
    
    static defaultProps = {
        match: {
          params: {}
        }

      }
    static contextType = ApiContext



    render() {
        const { expired=[] } = this.context

        return(
            <div className='container'>
                <>
 
                    <Link to='/kitchen'>Back to Kitchen</Link>


                    <Header/>
                </>
                
                <ul className='Expired-list ingredient-list'>
                    {expired.map(ingredient =>
                            
                        <li className='ingredient' key= {ingredient.ingredient_id}>

                            <div className='head'>
                                <Link to={`/edit-ingredient/${ingredient.ingredient_id}`}><button className='edit-button'>Edit</button></Link>
                                <button className='delete-button'>Delete</button>
                            </div>

                            <div className='center'>
                                <h4>{ingredient.name}</h4>
                                <p>Quantity:{ingredient.quantity} {ingredient.quantity_type}</p>
                            </div>

                        </li>    
                    )}      

                </ul>
               <SignOut/>
            </div>
        );
    }
}

export default ExpiredPage