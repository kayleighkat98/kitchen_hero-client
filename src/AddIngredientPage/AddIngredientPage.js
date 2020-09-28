import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SignOut from '../SignOut/SignOut';
import Header from '../Header/Header';

class AddIngredientPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          ingredientName: {
            value: "",
          },
          noteContent: {
            value: "",
          },
          folder_id: {
            value: "",
          },
          isError: false,
          errorMsg: "",
          redirect: null,
        };
      }

    render() {
        return(
            <div className='container'>
                <Link to='/kitchen'>Back to Kitchen</Link>
                <div className='head'>
                    <Header/>
                </div>
                
                <form className='add-ingredient'>
                   <ul className='wrapper'>
                        {/* name */}
                        <li className='form-row'>
                            <label>
                                Ingredient Name:
                                <input type='text' name='ingredient-name'/>
                            </label>
                        </li>
                        {/* ammount */}
                        <li className='form-row'>
                            <label>
                                Amount of item:
                                <input type='Text' name='ingredient-quantity'/>
                            </label>
                        </li>
                        {/* ammount type */}
                        <li className='form-row'>
                            <select>
                                <option value='pounds'>Pounds</option>
                                <option value='cups'>Cups</option>
                                <option value='gallons'>Gallons</option>
                                <option value='ounces'>Ounces</option>
                                <option value='liters'>Liters</option>
                            </select>
                        </li>
                        {/* expiration */}
                        <li className='form-row'>
                            <label>
                                Item expiration:
                                <input type='text' name='expiration-date'/>
                            </label>
                        </li>
                        {/*expiration type*/}
                        <li className='form-row'>
                            <select>
                                <option value='weeks'>Weeks</option>
                                <option value='days'>Days</option>
                                <option value='months'>Months</option>
                            </select>
                        </li>
                        {/*submit*/}
                        <li className='form-row'>
                            {/* <input type='submit' value='submit'/> */}
                            <Link to='/epantry'>
                                Add Ingredient
                            </Link>
                        </li>
                    </ul>
                </form>
                <SignOut/>
            </div>
        );
    }
}

export default AddIngredientPage