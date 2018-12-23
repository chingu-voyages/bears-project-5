import React, { Component } from 'react';
import FoodList from './FoodList';
import Calories from './Calories';
class LandingPage extends Component {
  render() {
    return (
      <div>
          <h1>landing page</h1>
          <Calories/>
          <FoodList />
      </div>
    );
  }
}

export default LandingPage;
