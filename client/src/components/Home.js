<<<<<<< HEAD
import React, { Component } from 'react';
import FoodList from './FoodList';
import AddFood from './AddFood';
class LandingPage extends Component {
=======
import React, { Component } from 'react'
import FoodList from './FoodList'
import { CaloriesCounter } from './CaloriesCounter'
import AddFood from './AddFood'
import './Home.css'
export class Home extends Component {
>>>>>>> f420f383ed681b458b0ad02a516d2530e8c2deab
  render() {
    const date = new Date()
    return (
<<<<<<< HEAD
      <div>
          <h1>landing page</h1>
          <AddFood />
          <FoodList />
          
=======
      <div className="Home">
        <h1>{date.toLocaleDateString()}</h1>
        <CaloriesCounter consumed={133} limit={2000} />
        <AddFood />
        <FoodList />
>>>>>>> f420f383ed681b458b0ad02a516d2530e8c2deab
      </div>
    )
  }
}
