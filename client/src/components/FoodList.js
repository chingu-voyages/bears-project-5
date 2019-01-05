import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getFoodQuery } from '../queries/queries'
import { FoodListItem } from './FoodListItem'
import './FoodList.css'

class FoodList extends Component {
  render() {
    const { data } = this.props
    console.log(data)
    return data.loading ? (
      <div>Food loading...</div>
    ) : (
      <div>
        {data.food.map(food => {
          return (
            <ul className="FoodList">
              <FoodListItem
                key={food.id}
                title={food.name}
                subTitle="a"
                caloryCount={food.kcal}
                image="https://i5.walmartimages.ca/images/Large/580/6_r/875806_R.jpg"
              />
            </ul>
          )
        })}
      </div>
    )
  }
}

export default graphql(getFoodQuery)(FoodList)
