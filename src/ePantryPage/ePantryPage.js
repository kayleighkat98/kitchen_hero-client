import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ePantryPage.css';
import Header from '../Header/Header';
import SignOut from '../SignOut/SignOut';
import ApiContext from '../ApiContext';
import config from "../config";

class ePantryPage extends Component {

    static defaultProps = {
        match: {
          params: {}
        }

      }
    static contextType = ApiContext

    handleClickDelete = e => {
        e.preventDefault()
        const ingredient_id = this.props.id
        
        fetch(`${config.API_ENDPOINT}/ingredients/${ingredient_id}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          },
        })
        .then(res => {
            if (!res.ok)
            return res.json().then(e => Promise.reject(e))
            return res.json()
        })
        .then(() => {
            this.context.deleteIngredient(ingredient_id)
            this.props.onDeleteIngredient(ingredient_id)
        })
        .catch(error => {
            console.error({ error })
        })
    }


    render() {
        const { ingredients=[] } = this.context

        return(
            <div className='epantry-page'>

                <Link to='/kitchen'>Back to Kitchen</Link>

                <div className='head'>
                   <Header/>
                </div>

                <Link to='/add-ingredient'><button>ADD MORE</button></Link>


                <ul className='epantry-list'>
                    {ingredients.map(ingredient =>
                    
                        <li className='ingredient' key= {ingredient.ingredient_id}>

                            <div className='head'>
                                <Link to='/edit-ingredient/:ingredient_id'><button className='edit-button'>Edit</button></Link>
                                <button className='delete-button'>Delete</button>
                            </div>

                            <div className='center'>
                                <h4>{ingredient.name}</h4>
                                <p>Quantity:{ingredient.quantity} {ingredient.quantity_type}</p>
                            </div>

                        </li>    
                    )}      
                </ul>
                <SignOut/>
            </div>
        );
    }
}

export default ePantryPage