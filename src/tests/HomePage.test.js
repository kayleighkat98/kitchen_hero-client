import HomePage from '../pages/HomePage.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("HomePage", () => {
  it("form renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><HomePage /></BrowserRouter>, div);
  });
});