import React, { Component } from 'react';
import '../../styles/dist/Ingredient.css';
import config from "../../config";
import TokenService from '../../services/token-service';
import IngredientContext from '../../contexts/IngredientContext';
class Ingredient extends Component {
    static defaultProps ={
        ingredient_id: () => {},
    };
    static contextType = IngredientContext;
    //PROCESSES THE DELETION OF AN INGREDIENT
    handleClickDelete = e => {
        e.preventDefault();
        const ingredient_id = this.props.ingredient_id;//DEFINE INGREDIENT TO DELETE
        fetch(`${config.API_ENDPOINT}/ingredients/${ingredient_id}`, {//CALL DELETE FETCH
          method: 'DELETE',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${TokenService.getAuthToken()}`,//PROVIDE AUTHORIZATION
          },
        }).then(res => {
            return res.json();
        }).then(() => {
            this.context.deleteIngredient(ingredient_id);//UPDATE CONTEXT VALUES
        }).then(()=>{
            window.location.reload(true);//REFRESH PAGE
        }).catch(error => {
            console.error({ error });
        });
    };
    render() {
        const {name, quantity, quantityType, expirationDate} = this.props;
        return(
            <div>
                <div className='head'>
                    <button className='edit-button'>{name}</button>
                    <button 
                        className='delete-button'
                        type='button'
                        onClick={this.handleClickDelete}
                    >
                        Delete
                    </button>
                </div>

                <div className='center'>
                    <h4 className='ingredient-name'>{name}</h4>
                    <p>{quantity} {quantityType}</p>
                    <p>Expiration Date: {expirationDate} </p>
                </div>
            </div>
        );
    };
};
export default Ingredient;