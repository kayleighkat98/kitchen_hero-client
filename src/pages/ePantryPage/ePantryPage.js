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
        if (this.context.ingredients === null){
            return(
                <>
                    <Link to='/add-ingredient'><Button>ADD MORE</Button></Link>
                </>
            );
        };
        const { ingredients=[] } = this.context;
        return(
            <div className='epantry-page'>
                <>
                    <Link to='/add-ingredient'><Button>ADD MORE</Button></Link>
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
                    )};
                </ul>
            </div>
        );
    };
    render() {
        return(
            <>{this.handleIngredientRender()}</>
        );
    };
};

export default ePantryPage;