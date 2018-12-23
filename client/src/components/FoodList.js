import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getFoodQuery = gql`
query{
    food{
      name
    }
  }
`


class FoodList extends Component {

 displayFood(){
var data = this.props.data;
    if(data.loading){
        return (<div>Food loading...</div>)
    } else{
        return data.food.map(food=>{
            return (<li>{food.name}</li>)
        });
    }
}





    render(){
        console.log(this.props);
        
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