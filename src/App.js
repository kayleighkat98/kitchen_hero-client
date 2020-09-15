import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import KitchenPage from './KitchenPage/KitchenPage';
import SignUpPage from './Login/SignUpPage';
import SignInPage from './Login/SignInPage';
import AddIngredientPage from './AddIngredientPage/AddIngredientPage';
import ePantryPage from './ePantryPage/ePantryPage';
import EditIngredientPage from './EditIngredientPage/EditIngredientPage';
import ExpiredPage from './ExpiredPage/ExpiredPage';
import config from "./config";
import ApiContext from "./ApiContext";
class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
           ingredients: [], 
        };
    }
    componentDidMount() {

      Promise.all([
        fetch(`${config.API_ENDPOINT}/ingredients`),
      ])
        .then((res) => {
          console.log(res)
          if (!res.ok) return res.json().then((e) => Promise.reject(e));
   
          // return Promise.all(res.json());
          return Promise.all(res.json());
        })
        .then((ingredients) => {
          console.log(ingredients)
          this.setState({ingredients });
        })
        .catch((error) => {
          console.error({ error });
        });
    }
    renderRoutes() {
      return (
        <>
                <Route
                    exact path = '/'
                    component= {HomePage}
                />
                <Route
                    path = '/about'
                    component = {AboutPage}
                />
                <Route
                    path = '/sign-up'
                    component = {SignUpPage}
                />
                <Route
                    path = '/login'
                    component = {SignInPage}
                />
                <Route
                    path = '/kitchen'
                    component = {KitchenPage}
                />
                <Route
                    path = '/epantry'
                    component = {ePantryPage}
                />
                <Route
                    path = '/expired'
                    component = {ExpiredPage}
                />
                <Route
                    path = '/add-ingredient'
                    component = {AddIngredientPage}
                />
                <Route
                    path = '/edit-ingredient/:ingredient_id'
                    component = {EditIngredientPage}
                />
        </>
      )
    }
    handleDeleteingredient = (ingredient_id) => {
      this.setState({
        ingredients: this.state.ingredients.filter((ingredient) => ingredient.ingredient_id !== ingredient_id),
      });
    };
  
    handleAddIngredient = () => {
      fetch(`${config.API_ENDPOINT}/ingredients`)
        .then((res) => res.json())
        .then((ingredients) => {
          console.log(ingredients)
          this.setState({
            ingredients,
          });
        })
        .catch((e) => {
          console.log("Error loading ingredient data");
        });
    };
  
    render() {
      const value = {
        ingredients: this.state.ingredients,
        addIngredient: this.handleAddIngredient,
        deleteIngredient: this.handleDeleteingredient,
      };
        return(
          <ApiContext.Provider value={value}>
            <main className='App'>
              {this.renderRoutes()}
            </main>
          </ApiContext.Provider>
        );
    }
}

export default App