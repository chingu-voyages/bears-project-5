import React from 'react'
import './CaloriesCounter.css'

export function CaloriesCounter({ consumed, limit }) {
  return (
    <div className="CaloriesCounter">
      <div className="CaloriesCounter__caloriesTitle">{consumed}</div>
      <div className="CaloriesCounter__caloriesSubtitle">calories</div>
      <div className="CaloriesCounter__caloriesLeft">left {limit}</div>
    </div>
  )
}
