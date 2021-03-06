import React, { Component } from 'react';
import TokenService from '../services/token-service';
import IdleService from '../services/idle-service';
import config from '../config';

const IngredientContext =  React.createContext({
  expired: null,
  ingredients: null,
  error: null,
  addIngredient: () => {},
  deleteIngredient: () => {},
  setError: () => {},
  clearError: () => {},
});
export default IngredientContext;
export class IngredientProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      expired: null,
      ingredients: null,
      addIngredient: () => {},
      deleteIngredient: () => {},
      setError: () => {},
      clearError: () => {},
    };
  };
  fetchIngredients = () => {// FETCHES ALL INGREDIENTS AND SETS STATE
    fetch(`${config.API_ENDPOINT}/ingredients`,{
      headers:{
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then(response => 
      response.json()
    ).then((ingredients) => {
      this.setState({ingredients });
    }).catch((error) => {
      console.error(error.message );
    });
  };
  fetchExpired = () => {// FETCHES ALL EXPIRED AND SETS STATE
    fetch(`${config.API_ENDPOINT}/ingredients/expired`,{
      headers:{
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then(response => 
      response.json()
    ).then((expired) => {
      this.setState({ expired })  
    }).catch((error) => {
      console.error(error.message )
    });
  };
  componentDidMount() {// PREVENTS FETCHES UNTIL AN AUTH TOKEN IS PRESENT
    TokenService.hasAuthToken()
      ? this.fetchIngredients()
      : console.log('please log in')
      TokenService.hasAuthToken()
      ? this.fetchExpired()
      : console.log('Demo credentials are listed in log in place holders')
  };
  componentWillUnmount() {//SETS TIMEOUT SIGNOUT WHEN USER IS INACTIVE
    IdleService.unRegisterIdleResets();
    TokenService.clearCallbackBeforeExpiry();
  };
  setError = error => {
    console.error(error);
    this.setState({ error });
  };
  clearError = () => {
    this.setState({ error: null });
  };
  handleDeleteingredient = (ingredient_id) => {//CLEARS DELETED INGREDIENT FROM STATE
    this.setState({
      ingredients: this.state.ingredients.filter((ingredient) => ingredient.ingredient_id !== ingredient_id),
    });
  };
  handleAddIngredient = () => {// POSTS NEW INGREDIENT TO USERS PANTRY ON OUR DATABASE
      fetch(`${config.API_ENDPOINT}/ingredients`,{
        headers:{
          'authorization': `Bearer ${TokenService.getAuthToken()}`,
        },
      }).then((res) => {
        res.json()
      }).then((ingredients) => {
        this.setState({
          ingredients,
        });
      }).catch((e) => {
        console.log("Error loading ingredient data");
      })
    ;
  };
  render() {
    const value = {
      error: this.state.error,
      ingredients: this.state.ingredients,
      expired: this.state.expired,
      setError: this.setError,
      clearError: this.clearError,
      deleteIngredient: this.handleDeleteingredient,
      addIngredient: this.handleAddIngredient,
    };
    return (
      <IngredientContext.Provider value={value}>
        {this.props.children}
      </IngredientContext.Provider>
    );
  };
};
  