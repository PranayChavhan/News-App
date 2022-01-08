import "./App.css";
import Navbar from "./components/Navbar.js";
import React, { Component } from "react";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          
          <Route
            path="/"
            element={
              <News key="general" country="in" size="9" category="general" />
            }
          />
          <Route
            path="/business"
            element={
              <News key="business" country="in" size="9" category="business" />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News key="entertainment" country="in" size="9" category="entertainment" />
            }
          />
          <Route
            path="/health"
            element={
              <News key="health" country="in" size="9" category="health" />
            }
          />
          <Route
            path="/science"
            element={
              <News key="science" country="in" size="9" category="science" />
            }
          />
          <Route
            path="/sports"
            element={
              <News key="sports" country="in" size="9" category="sports" />
            }
          />
          <Route
            path="/technology"
            element={
              <News key="technology" country="in" size="9" category="technology" />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
