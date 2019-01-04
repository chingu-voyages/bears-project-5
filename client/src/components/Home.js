import React, { Component } from 'react';
import FoodList from './FoodList';
import AddFood from './AddFood';
class LandingPage extends Component {
  render() {
    return (
      <div>
          <h1>landing page</h1>
          <AddFood />
          <FoodList />
          
      </div>
    );
  }
}

export default LandingPage;
