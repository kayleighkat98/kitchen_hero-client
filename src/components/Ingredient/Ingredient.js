import React, { Component } from 'react';
import './Ingredient.css';
import config from "../../config";
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-service';
import IngredientContext from '../../contexts/IngredientContext';
class Ingredient extends Component {
    static defaultProps ={
        onDeleteIngredient: () => {},
        ingredient_id: () => {},
    };
    static contextType = IngredientContext;
    handleClickDelete = e => {
        e.preventDefault();
        const ingredient_id = this.props.ingredient_id;
        fetch(`${config.API_ENDPOINT}/ingredients/${ingredient_id}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${TokenService.getAuthToken()}`,
          },
        }).then(res => {
            return res.json();
        }).then(() => {
            this.context.deleteIngredient(ingredient_id);
            this.props.onDeleteIngredient(ingredient_id);
        }).then(()=>{
            window.location.reload(true);
        }).catch(error => {
            console.error({ error });
        });
    };
    render() {
        const {ingredient_id, name, quantity, quantityType, expirationDate} = this.props;
        return(
            <div className='ingredient-container'>
                <div className='head'>
                    <Link to={`/edit-ingredient/${ingredient_id}`}><button className='edit-button'>Edit</button></Link>
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