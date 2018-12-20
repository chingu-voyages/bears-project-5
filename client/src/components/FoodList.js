import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getFoodQuery = gql`
    {
        foods{
            name
            kcal
        }
    }
`


class FoodList extends Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <p>Food food</p>
                
            </div>
        )
    }

}

export default graphql(getFoodQuery)(FoodList);