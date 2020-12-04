import React, { Component } from 'react';
import IngredientContext from '../../contexts/IngredientContext';
import Ingredient from "../../components/Ingredient/Ingredient";
class PantryPage extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      };
    static contextType = IngredientContext;//DEFINE CONTEXT
    handleDeleteIngredient = ingredient_id => {//HANDLE PAGE HISTORY ON DELETE
        this.props.history.push(`/pantry`)
    };
    handleIngredientRender = () => {//IF USER HAS INGREDIENTS, SHOW THEM
        if (this.context.ingredients && this.context.ingredients.length > 0){
            const { ingredients=[] } = this.context;
            return(
                <div className='pantry-page'>
                    <ul className='pantry-list'>
                        {ingredients.map(ingredient =>
                            <li className='ingredient' key= {ingredient.ingredient_id}>
                                <Ingredient
                                    ingredient_id={ingredient.ingredient_id} 
                                    name = {ingredient.name}
                                    quantity = {ingredient.quantity}
                                    quantityType = {ingredient.quantity_type}
                                    expirationDate = {ingredient.expiration_date}
                                    onDeleteIngredient = {this.handleDeleteIngredient}
                                />
                            </li>    
                        )}
                    </ul>
                </div>
            );
        } else{
            return(
                <>
                    No ingredients to show, begin by adding a few!
                </>
            );
        };
    };
    render() {
        return(
            <div>
                {this.handleIngredientRender()}
            </div>
        );
    };
};

export default PantryPage;