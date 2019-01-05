import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getFoodQuery } from '../queries/queries'
import { FoodListItem } from './FoodListItem'
import './FoodList.css'

class FoodList extends Component {
<<<<<<< HEAD

    displayFood(){
        var data = this.props.data;
            if(data.loading){
                return (<div>Food loading...</div>)
            } else{
                return data.food.map(food=>{
                    return (<li key={food.id}>{food.name}, {`kcal: ${food.kcal}`}</li>)
                });
            }
    }


    render(){

        return(
            
            <div>
                <ul>
                    {this.displayFood()}
                </ul>
            </div>
        )
    }

=======
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
>>>>>>> f420f383ed681b458b0ad02a516d2530e8c2deab
}

export default graphql(getFoodQuery)(FoodList)
