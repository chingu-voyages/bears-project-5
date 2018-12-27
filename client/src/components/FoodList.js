import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getFoodQuery} from '../queries/queries';

class FoodList extends Component {

    displayFood(){
        var data = this.props.data;
        console.log(this.props);
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

}

export default graphql(getFoodQuery)(FoodList);