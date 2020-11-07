import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import KitchenPage from '../pages/KitchenPage/KitchenPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import SignInPage from '../pages/SignInPage/SignInPage';
import AddIngredientPage from '../pages/AddIngredientPage/AddIngredientPage';
import ePantryPage from '../pages/ePantryPage/ePantryPage';
import EditIngredientPage from '../pages/EditIngredientPage/EditIngredientPage';
import ExpiredPage from '../pages/ExpiredPage/ExpiredPage';
import PrivateRoute from '../utils/PrivateRoute';
import PublicOnlyRoute from '../utils/PublicOnlyRoute';
import Header from '../components/Header/Header';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
class App extends Component {
  state = { hasError: false }
  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true }
  }
  render() {
    const { hasError } = this.state
    return (
      <div className='App'>
        <Header />
        <main  id='react-root' >
          {hasError && (
            <p>There was an error! Oh no!</p>
          )}
          <Switch>
            <Route
              exact path = '/'
              component= {HomePage}
            />
            <Route
              path = '/about'
              component = {AboutPage}
            />
            <PublicOnlyRoute
              path = '/register'
              component = {RegistrationPage}
            />
            <PublicOnlyRoute
              path = '/login'
              component = {SignInPage}
            />
            <PrivateRoute
              path = '/kitchen'
              component = {KitchenPage}
            />
            <PrivateRoute
              path = '/epantry'
              component = {ePantryPage}
            />
            <PrivateRoute
              path = '/expired'
              component = {ExpiredPage}
            />
            <PrivateRoute
              path = '/add-ingredient'
              component = {AddIngredientPage}
            />
            <PrivateRoute
              path = '/edit-ingredient/:ingredient_id'
              component = {EditIngredientPage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}
export default App;