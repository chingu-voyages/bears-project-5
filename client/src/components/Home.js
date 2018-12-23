import React, { Component } from 'react';
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
