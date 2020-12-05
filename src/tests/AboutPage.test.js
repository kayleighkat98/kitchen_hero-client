import AboutPage from '../pages/AboutPage.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("AboutPage", () => {
  it("form renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><AboutPage /></BrowserRouter>, div);
  });
});