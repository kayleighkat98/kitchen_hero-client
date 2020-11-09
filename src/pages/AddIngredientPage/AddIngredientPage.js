import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import IngredientContext from '../../contexts/IngredientContext';
import config from '../../config';
import { Input, Required, Label } from '../../components/Form/Form';
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
      expirationDate: {
        value: 'None',
      },
      isError: false,
      errorMsg: "",
      redirect: null,
    };
  };
  static contextType = IngredientContext;//DEFINE CONTEXT

  static defaultProps = {
    viewtype: false,
    match: {
      params: {},
    },
  };
  validateIngredient = () => {//DECIDE IF INGREDIENT IS VALID
    const name = this.state.name.value;
    const amount = this.state.amount.value;
    const amountType = this.state.amountType.value;
    if (!name || name === ' ') {
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
  submitIngredient = (e) => {//PROCESSES ADDING AN INGREDIENT TO THE SERVER
    e.preventDefault();
    this.setState({ isError: false, errorMsg: "" });
    if (this.validateIngredient()) {
      fetch(`${config.API_ENDPOINT}/ingredients`, {//ACCESS SERVER
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
          expiration_date: `${this.state.expirationDate.value}`,
        }),
      }).then((res) => {
        return res.json();
      }).then((response) => {//UTILIZE RESPONSE FROM SERVER
        this.context.addIngredient();
        this.setState({
          redirect: "/pantry",
        });
      }).then(()=>{
       window.location.reload(true);
      }).catch((error) => {
        this.setState({
          isError: true,
          errorMsg: error.message
        });
      });
    };
  };
  updateName = (name) => {//DEFINE STATE
    this.setState({ name: { value: name } });
  };
  updateAmount = (amount) => {//DEFINE STATE
    this.setState({ amount: { value: amount } });
  };
  updateAmountType= (amountType) => {//DEFINE STATE
    this.setState({ amountType: { value: amountType } });
  };
  updateExpiration= (expirationDate) => {//DEFINE STATE
    this.setState({ expirationDate: { value: expirationDate } });
  };
  render() {
    if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />;
      }
    const { className, ...otherProps } = this.props;
    this.history = otherProps.history;
    return(
      <div className='container'>
        <form onSubmit={(e) => this.submitIngredient(e)}>
          <ul className='wrapper'>
            {/* name */}
            <li className='form-row'>
              <Label>
                Ingredient Name:
                < Required />
                <Input 
                  type='text' 
                  name='ingredient-name'
                  onChange={(e) => this.updateName(e.target.value)}
                />
              </Label>
            </li>
            {/* amount */}
            <li className='form-row'>
              <Label>
                Amount of item:
                < Required />
                <Input 
                  type='number' 
                  min = '1'
                  max = '100000'
                  name='ingredient-quantity'
                  onChange={(e) => this.updateAmount(e.target.value)}
                  required                                
                />
              </Label>
            </li>
            {/* amount type */}
            <li className='form-row'>
            <Label>
                Measurment type:
                < Required />
                <select onChange={(e) => this.updateAmountType(e.target.value)}>
                <option>Select Unit Type</option>
                <option value='pounds'>Pounds</option>
                <option value='cups'>Cups</option>
                <option value='gallons'>Gallons</option>
                <option value='ounces'>Ounces</option>
                <option value='liters'>Liters</option>
              </select>
              </Label>

            </li>
            {/* expiration */}
            <li className='form-row'>
              <Label >Expiration date:
                <Input 
                  type="date" 
                  id="expiration" 
                  name="expirationDate"
                  min="2020-01-01" 
                  max="3020-01-01"
                  onChange={(e) => this.updateExpiration(e.target.value)}
                />   
              </Label>
            </li>
            {/*submit*/}
            <li className='form-row'>
              <Input type="submit" name="ingredientSubmit" value="Submit"/>
            </li>
          </ul>
        </form>
        {this.state.isError && <p>{this.state.errorMsg}</p>}
      </div>
    );
  };
};

export default AddIngredientPage;