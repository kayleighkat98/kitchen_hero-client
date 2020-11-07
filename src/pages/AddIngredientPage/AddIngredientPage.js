import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import IngredientContext from '../../contexts/IngredientContext';
import config from '../../config';
import IngredientForm from "../../components/IngredientForm/IngredientForm";
import TokenService from '../../services/token-service';
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
      isError: false,
      errorMsg: "",
      redirect: null,
    };
  };
  static contextType = IngredientContext;

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
    else if (!amount){
        this.setState({
            isError: true,
            errorMsg: "Amount is required as a number.",
        });
        return false;
    }
    else if (!amountType || amountType === 'Select Unit Type'){
      this.setState({
          isError: true,
          errorMsg: "Unit type of amount is required.",
      });
      return false;
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
          'authorization': `Bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify({
          name: `${this.state.name.value}`,
          user_id: `${this.props.user.user.id}`,
          quantity: `${this.state.amount.value}`,
          quantity_type: `${this.state.amountType.value}`,
          expiration_date: `${this.state.expireDate.value}`,
        }),
      }).then((res) => {
        return res.json();
      }).then((response) => {
        this.context.addIngredient();
        this.setState({
          redirect: "/epantry",
        });
      }).catch((error) => {
        this.setState({
          isError: true,
          errorMsg: error.message
        });
      });
    };
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
  updateExpiration= (expireDate) => {
    this.setState({ expireDate: { value: expireDate } });
  };
  render() {
    if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />;
      }
    const { ingredients = [] } = this.context;
    const { className, ...otherProps } = this.props;
    this.history = otherProps.history;
    return(
      <div className='container'>
        <Link to='/kitchen'>Back to Kitchen</Link>
        <IngredientForm className='add-ingredient' onSubmit={(e) => this.submitIngredient(e)}>
          <ul className='wrapper'>
            {/* name */}
            <li className='form-row'>
              <label>
                Ingredient Name:
                <input 
                  type='text' 
                  name='ingredient-name'
                  onChange={(e) => this.updateName(e.target.value)}
                />
              </label>
            </li>
            {/* amount */}
            <li className='form-row'>
              <label>
                Amount of item:
                <input 
                  type='number' 
                  min = '1'
                  max = '100000'
                  name='ingredient-quantity'
                  onChange={(e) => this.updateAmount(e.target.value)}
                  required                                
                />
              </label>
            </li>
            {/* amount type */}
            <li className='form-row'>
              <select onChange={(e) => this.updateAmountType(e.target.value)}>
                <option>Select Unit Type</option>
                <option value='pounds'>Pounds</option>
                <option value='cups'>Cups</option>
                <option value='gallons'>Gallons</option>
                <option value='ounces'>Ounces</option>
                <option value='liters'>Liters</option>
              </select>
            </li>
            {/* expiration */}
            <li className='form-row'>
              <label >Expiration date:
                <input 
                  type="date" 
                  id="expiration" 
                  name="expire-date"
                  min="2020-01-01" 
                  max="3020-01-01"
                  onChange={(e) => this.updateExpiration(e.target.value)}
                />   
              </label>
            </li>
            {/*submit*/}
            <li className='form-row'>
              <input type="submit" name="ingredientSubmit" />
            </li>
          </ul>
        </IngredientForm>
        {this.state.isError && <p>{this.state.errorMsg}</p>}
      </div>
    );
  };
};

export default AddIngredientPage;