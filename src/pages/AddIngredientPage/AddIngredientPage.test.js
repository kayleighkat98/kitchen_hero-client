import AddIngredientPage from './AddIngredientPage.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("AddIngredientPage", () => {
  it("form renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><AddIngredientPage /></BrowserRouter>, div);
  });
});