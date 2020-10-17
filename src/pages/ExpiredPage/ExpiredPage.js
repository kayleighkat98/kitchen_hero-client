import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ExpiredPage.css';
import Header from '../../components/Header/Header';
import SignOut from '../../components/SignOut/SignOut';
import ApiContext from '../../ApiContext';

import Ingredient from '../../components/Ingredient/Ingredient';
class ExpiredPage extends Component {
    
    static defaultProps = {
        match: {
          params: {}
        }
      }
    static contextType = ApiContext
    handleDeleteIngredient = ingredient_id => {
        this.props.history.push(`/expired`)
    }
    render() {
        const { expired=[] } = this.context
        console.log('expired' ,expired)
        return(
            <div className='container'>
                <>
                    <Link to='/kitchen'>Back to Kitchen</Link>
                    <Header/>
                    <Link to='/add-ingredient'><button>ADD MORE</button></Link>
                </>  
                <ul className='Expired-list ingredient-list'>
                    {expired.map(ingredient =>                
                        <li className='ingredient' key= {ingredient.ingredient_id}>
                            <Ingredient
                                ingredient_id={ingredient.ingredient_id} 
                                name = {ingredient.name}
                                quantity = {ingredient.quantity}
                                quantityType = {ingredient.quantityType}
                                onDeleteIngredient = {this.handleDeleteIngredient}
                            />
                        </li>    
                    )}      
                </ul>
               <SignOut/>
            </div>
        );
    }
}

export default ExpiredPage