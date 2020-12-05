import PantryPage from '../pages/PantryPage.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("PantryPage", () => {
  it("form renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><PantryPage /></BrowserRouter>, div);
  });
});