import React, { Component } from 'react';
import './styles/dist/App.css'
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import KitchenPage from './pages/KitchenPage';
import RegistrationPage from './pages/RegistrationPage';
import SignInPage from './pages/SignInPage';
import AddIngredientPage from './pages/AddIngredientPage';
import PantryPage from './pages/PantryPage';
import ExpiredPage from './pages/ExpiredPage';
import PrivateRoute from './utils/PrivateRoute';
import PublicOnlyRoute from './utils/PublicOnlyRoute';
import Header from './components/Header';
import NotFoundPage from './pages/NotFoundPage';
class App extends Component {
  state = { hasError: false }
  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true }
  }
  render() {
    const { hasError } = this.state
    //SWITCH BOARD FOR REACT ROUTES
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
              path = '/pantry'
              component = {PantryPage}
            />
            <PrivateRoute
              path = '/expired'
              component = {ExpiredPage}
            />
            <PrivateRoute
              path = '/add-ingredient'
              component = {AddIngredientPage}
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