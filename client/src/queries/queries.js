import { gql } from 'apollo-boost';

const getFoodQuery = gql`
query{
    food{
      name
      kcal
    }
  }
`

const addFood = gql`
mutation($name: String!, $kcal: Number!){
    addFood(name: $name, kcal: $kcal){
      name
      kcal
    }
  }
  
`

export {getFoodQuery, addFood};