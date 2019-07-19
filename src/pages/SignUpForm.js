import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      hasAgreed: false
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
    in Sign Up form when we press 'Sign un button'
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
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label htmlFor="name" className="FormField-Label">
              Full Name
            </label>
            <input
              type="text"
              id="name "
              placeholder="Enter your full name"
              className="FormField-Input"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
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
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>

          <div className="FormField">
            <label htmlFor="confirmPassword" className="FormField-Label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword "
              placeholder="Confirm Password"
              className="FormField-Input"
              name="confirmPassword"
              onChange={this.handleChange}
              value={this.state.confirmPassword}
            />
          </div>

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
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>

          <div className="FormField">
            <label className="FormField-CheckboxLabel">
              <input
                type="checkbox"
                name="hasAgreed"
                className="FormField-Checkbox"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />
              I agree to all
              <a href="" className="FormField-TermsLink">
                terms and conditions
              </a>
            </label>
          </div>

          <div className="FormField">
            <button className="FormField-Button mr-20">Sign Up</button>
            <Link to="/sign-in" className="FormField-Link">
              I'm already a member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
