import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignUpForm extends Component {
  render() {
    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit="{this.handleSubmit}">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="FormField__Input"
              placeholder="Enter your username"
              name="username"
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
            />
          </div>
          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
              />
              I agree to all statments in
              <Link to="/terms-of-service" className="FormField__TermsLink">
                terms of service
              </Link>
            </label>
          </div>
          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>
            <Link to="/sign-in" className="FormField__Link">
              I am already a member
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUpForm
