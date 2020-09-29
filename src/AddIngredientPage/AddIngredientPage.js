import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ApiContext from '../ApiContext';
import config from '../config';
import SignOut from '../SignOut/SignOut';
import Header from '../Header/Header';


class AddIngredientPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: {
            value: "",
          },
          amount: {
            value: "",
          },
          amountType: {
            value: "",
          },
          expireDate: {
            value: "",
          },
          dateType: {
            value: "",
          },
          isError: false,
          errorMsg: "",
          redirect: null,
        };
    }
    static contextType = ApiContext;

    static defaultProps = {
      viewtype: false,
      match: {
        params: {},
      },
    };

    validateIngredient = () => {
        const name = this.state.name.value;
        const amount = this.state.amount.value;
        const amountType = this.state.amountType.value;
        if (!name) {
          this.setState({
            isError: true,
            errorMsg: "Name is required.",
          });
          return false;
        }
        if (!amount){
            this.setState({
                isError: true,
                errorMsg: "Amount is required.",
            })
        }
        if (!amountType){
            this.setState({
                isError: true,
                errorMsg: "Measurement type for amount is required.",
            })
        }
        return true;
    };

    submitIngredient = (e) => {
        e.preventDefault();
        this.setState({ isError: false, errorMsg: "" });

    
        if (this.validateIngredient()) {
    
          fetch(`${config.API_ENDPOINT}/ingredients`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: `${this.state.name.value}`,
              quantity: `${this.state.amount.value}`,
              quantity_type: `${this.state.amountType.value}`,

            }),
          })
          .then((res) => {
            if (!res.ok) return res.json().then((e) => Promise.reject(e));
            return res.json();
          })
          .then((response) => {
            this.context.addIngredient();
            this.setState({
              redirect: "/epantry",
            });
          })
          .catch((error) => {
            this.setState({
              isError: true,
              errorMsg: error.message
            })
          });
        }
    };
    
    updateName = (name) => {
        this.setState({ name: { value: name } });
    };

    updateAmount = (amount) => {
        this.setState({ amount: { value: amount } });
    };

    updateAmountType= (amountType) => {
        this.setState({ amountType: { value: amountType } });
    };

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