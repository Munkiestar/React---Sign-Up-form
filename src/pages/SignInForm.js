import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handleChange method
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  // handleSubmit
  /*
    in Sign In form when we press 'Sign in button'
    we see submitted data in Console
  */
  handleSubmit(e) {
    e.preventDefault();

    console.log("This form was submitted with the following data: ");
    console.log(this.state);
  }

  render() {
    return (
      <div className="FormCenter">
        <form
          onSubmit={this.handleSubmit}
          className="FormFields"
          onSubmit={this.handleSubmit}
        >
          <div className="FormField">
            <label htmlFor="email" className="FormField-Label">
              Email Address
            </label>
            <input
              type="email"
              id="email "
              placeholder="Enter your email"
              className="FormField-Input"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label htmlFor="password" className="FormField-Label">
              Password
            </label>
            <input
              type="password"
              id="password "
              placeholder="Enter your password"
              className="FormField-Input"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <button className="FormField-Button mr-20">Sign In</button>
            <Link to="/" className="FormField-Link">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
