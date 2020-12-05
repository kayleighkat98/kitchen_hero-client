import GetStarted from '../components/GetStarted.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("GetStarted", () => {
  it("form renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><GetStarted /></BrowserRouter>, div);
  });
});