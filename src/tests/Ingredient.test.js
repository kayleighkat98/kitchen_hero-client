import Ingredient from '../components/Ingredient.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("Ingredient", () => {
  it("form renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><Ingredient /></BrowserRouter>, div);
  });
});