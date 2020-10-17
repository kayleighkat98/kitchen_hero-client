import NotFoundPage from './NotFoundPage.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("NotFoundPage", () => {
  it("form renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><NotFoundPage /></BrowserRouter>, div);
  });
});