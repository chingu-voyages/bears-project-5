import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import SignUpForm from './components/SignUpForm.js';
import SignInForm from './components/SignInForm.js'
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
            <div className="PageSwitcher">
              <NavLink href="#" to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Home</NavLink>
              <NavLink href="#" to="/signin" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              <NavLink href="#" exact to="/signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>        
        <hr />
        <h1> Fitness  App</h1>

          <Route  path="/signup" component={SignUpForm}/>
          <Route path="/signin" component={SignInForm} />
          <Route exact path="/" component={Home} />
        
        </div>
      </Router>
    );
  }
}

export default App;
