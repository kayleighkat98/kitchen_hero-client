import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import KitchenPage from './KitchenPage/KitchenPage';
import SignUpPage from './Login/SignUpPage';
import SignInPage from './Login/SignInPage';
import AddIngredientPage from './AddIngredientPage/AddIngredientPage';
import ePantryPage from './ePantryPage/ePantryPage';
import EditIngredientPage from './EditIngredientPage/EditIngredientPage';
import ExpiredPage from './ExpiredPage/ExpiredPage';
function App() {
  return (
    <main className='App'>
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
        path = '/edit-ingredient'
        component = {EditIngredientPage}
      />


    </main>
  );
}

export default App;