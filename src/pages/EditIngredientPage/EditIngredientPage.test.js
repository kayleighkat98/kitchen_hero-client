import EditIngredientPage from './EditIngredientPage.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("EditIngredientPage", () => {
  it("form renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><EditIngredientPage /></BrowserRouter>, div);
  });
});