import React from 'react'
import './FoodListItem.css'
export function FoodListItem({ image, title, subTitle, caloryCount }) {
  return (
    <li className="FoodListItem">
      <img
        src={image}
        alt=""
        height="20"
        width="20"
        className="FoodListItem__title"
      />
      <div className="FoodListItem__title">{title}</div>
      <div className="FoodListItem__subTitle">{subTitle}</div>
      <div className="FoodListItem__calories">{caloryCount} calories</div>
    </li>
  )
}
