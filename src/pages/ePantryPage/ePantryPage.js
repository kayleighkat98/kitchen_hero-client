import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ePantryPage.css';
import IngredientContext from '../../contexts/IngredientContext';
import Ingredient from "../../components/Ingredient/Ingredient"


class ePantryPage extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
    static contextType = IngredientContext

    handleDeleteIngredient = ingredient_id => {
        this.props.history.push(`/epantry`)
    }

    render() {
        const { ingredients=[] } = this.context

        return(
            <div className='epantry-page'>
                <>
                    <Link to='/add-ingredient'><button>ADD MORE</button></Link>
                </>

                <ul className='epantry-list'>
                    {ingredients.map(ingredient =>
                        
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

export default ePantryPage