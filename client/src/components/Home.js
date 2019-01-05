import React, { Component } from 'react'
import FoodList from './FoodList'
import { CaloriesCounter } from './CaloriesCounter'
import AddFood from './AddFood'
import './Home.css'
export class Home extends Component {
  render() {
    const date = new Date()
    return (
      <div className="Home">
        <h1>{date.toLocaleDateString()}</h1>
        <CaloriesCounter consumed={133} limit={2000} />
        <AddFood />
        <FoodList />
      </div>
    )
  }
}
