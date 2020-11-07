import React, { Component } from 'react';
import './ExpiredPage.css';
import IngredientContext from '../../contexts/IngredientContext';

import Ingredient from '../../components/Ingredient/Ingredient';
class ExpiredPage extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      };
    static contextType = IngredientContext;
    handleDeleteIngredient = ingredient_id => {
        this.props.history.push(`/expired`);
    };
    handleExpiredRender = () => {
        if (this.context.expired === null || this.context.expired.length < 1){
            return (
                <>
                    <h4>None of your ingredients are expired. Hurray!</h4>
                </>
            );
        };
        const { expired=[] } = this.context;
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
                                expirationDate = {ingredient.expiration_date}
                                onDeleteIngredient = {this.handleDeleteIngredient}
                            />
                        </li>    
                    )}
                </ul>
            </div>
        );
    };
    render() {
        return (
           <> {this.handleExpiredRender()}</>
        );
    };
};

export default ExpiredPage;