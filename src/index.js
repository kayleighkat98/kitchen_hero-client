import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';
import {UserProvider}  from './contexts/UserContext';
import {IngredientProvider} from './contexts/IngredientContext';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <IngredientProvider>
        <App />
      </IngredientProvider>
    </UserProvider>
  </BrowserRouter>, 
  document.getElementById('root')
);