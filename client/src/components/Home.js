import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FoodList from './FoodList';
class LandingPage extends Component {
  render() {
    return (
      <div>
          <h1>landing page</h1>
          <FoodList />
      </div>
    );
  }
}

export default LandingPage;
