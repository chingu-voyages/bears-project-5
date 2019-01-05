import React from 'react'
import './CaloriesCounter.css'

export function CaloriesCounter({ consumed, limit }) {
  return (
    <div className="CaloriesCounter">
      <div className="CaloriesCounter__calories">{consumed}</div>
      <div>calories</div>
      <div>left {limit}</div>
    </div>
  )
}
