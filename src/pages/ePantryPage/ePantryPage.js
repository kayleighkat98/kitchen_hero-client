import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ePantryPage.css';
import Header from '../../components/Header/Header';
import SignOut from '../../components/SignOut/SignOut';
import ApiContext from '../../ApiContext';

import Ingredient from "../../components/Ingredient/Ingredient"


class ePantryPage extends Component {

    static defaultProps = {
        match: {
          params: {}
        }

      }
    static contextType = ApiContext

    handleDeleteIngredient = ingredient_id => {
        this.props.history.push(`/epantry`)
    }



    render() {
        const { ingredients=[] } = this.context

        return(
            <div className='epantry-page'>
                <>

                    <Link to='/kitchen'>Back to Kitchen</Link>


                    <Header/>


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
                <SignOut/>
            </div>
        );
    }
}

export default ePantryPage