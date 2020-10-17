import IngredientForm from './IngredientForm.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("IngredientForm", () => {
  it("form renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><IngredientForm /></BrowserRouter>, div);
  });
});