import React, { Component } from 'react';
import './ExpiredPage.css';
import IngredientContext from '../../contexts/IngredientContext';

import Ingredient from '../../components/Ingredient/Ingredient';
class ExpiredPage extends Component {
    
    static defaultProps = {
        match: {
          params: {}
        }
      }
    static contextType = IngredientContext
    handleDeleteIngredient = ingredient_id => {
        this.props.history.push(`/expired`)
    }
    render() {
        const { expired=[] } = this.context
        console.log('expired' ,expired)
        return(
            <div className='container'>
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
            </div>
        );
    }
}

export default ExpiredPage