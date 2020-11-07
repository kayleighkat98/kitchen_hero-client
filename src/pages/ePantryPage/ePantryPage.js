import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ePantryPage.css';
import IngredientContext from '../../contexts/IngredientContext';
import Ingredient from "../../components/Ingredient/Ingredient";
import Button from '../../components/Button/Button';


class ePantryPage extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      };
    static contextType = IngredientContext;

    handleDeleteIngredient = ingredient_id => {
        this.props.history.push(`/epantry`)
    };
    handleIngredientRender = () => {
        if (this.context.ingredients && this.context.ingredients.length > 0){
            const { ingredients=[] } = this.context;
            return(
                <div className='epantry-page'>

                    <ul className='epantry-list'>
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
        }
        
    };
    render() {
        return(
            <>
                <Link to='/add-ingredient'><Button>ADD MORE</Button></Link>
                {this.handleIngredientRender()}
            </>
        );
    };
};

export default ePantryPage;