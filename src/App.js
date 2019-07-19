import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";

import CasinoRoyale from "../src/img/casino.jpg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-Aside">
          <img src={CasinoRoyale} alt="Casino Heist" />
        </div>
        <div className="App-Form">
          <div className="PageSwitcher">
            <NavLink
              to="/sign-in"
              activeClassName="PageSwitcher-Item-Active"
              className="PageSwitcher-Item"
            >
              Sign In
            </NavLink>
            <NavLink
              exact
              to="/"
              activeClassName="PageSwitcher-Item-Active"
              className="PageSwitcher-Item"
            >
              Sign Up
            </NavLink>
          </div>

          <div className="FormTitle">
            <NavLink
              to="/sign-in"
              activeClassName="FormTitle-Link-Active"
              className="FormTitle-Link"
            >
              Sign In
            </NavLink>{" "}
            or{" "}
            <NavLink
              exact
              to="/"
              activeClassName="FormTitle-Link-Active"
              className="FormTitle-Link"
            >
              Sign Up
            </NavLink>
          </div>

          <Route exact path="/" component={SignUpForm} />

          <Route path="/sign-in" component={SignInForm} />
        </div>
      </div>
    </Router>
  );
}

export default App;
