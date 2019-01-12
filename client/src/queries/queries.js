import { gql } from 'apollo-boost';

const getFoodQuery = gql`
query{
    food{
      id
      name
      kcal
    }
  }
`

const searchFoodQuery = gql `
query{
  food(name: $name){
    name
    kcal
  }
}
`



const addFood = gql`
mutation($name: String!, $kcal: String!){
    addFood(name: $name, kcal: $kcal){
      name
      kcal
    }
  }
  
`

export {getFoodQuery, addFood, searchFoodQuery};