import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class EditIngredientPage extends Component {
    render() {
        return(
            <div className='container'>
                <form className='add-ingredient'>
                   <ul className='wrapper'>
                        <li className='form-row'>
                            <label>
                                Ingredient Name:
                                <input type='text' name='ingredient-name'/>
                            </label>
                        </li>
                        <li className='form-row'>
                            <label>
                                Amount of item:
                                <input type='Text' name='ingredient-quantity'/>
                            </label>
                        </li>
                        <li className='form-row'>
                            <select>
                                <option value='pounds'>Pounds</option>
                                <option value='cups'>Cups</option>
                                <option value='gallons'>Gallons</option>
                                <option value='ounces'>Ounces</option>
                                <option value='liters'>Liters</option>
                            </select>
                        </li>
                        <li className='form-row'>
                            <label>
                                Item expiration:
                                <input type='text' name='expiration-date'/>
                            </label>
                        </li>
                        <li className='form-row'>
                            <select>
                                <option value='weeks'>Weeks</option>
                                <option value='days'>Days</option>
                                <option value='months'>Months</option>
                            </select>
                        </li>
                        <li className='form-row'>
                            {/* <input type='submit' value='submit'/> */}
                            <Link to='/epantry'>Submit</Link>
                        </li>
                    </ul>
                </form>

            </div>
        );
    };
};

export default EditIngredientPage;