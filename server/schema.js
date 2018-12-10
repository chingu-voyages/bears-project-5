const _ = require('lodash');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

var foods = [
    {
        name: "banana", 
        kcal: 150,
        id: "1"
    },
    {
        name: "chicken",
        kcal: 300,
        id: "2"
    }
]

const FoodType = new GraphQLObjectType({
    name: 'Food',
    fields: ()=>({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        kcal: {type: GraphQLInt}
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields: {
        food: {
            type: FoodType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){
                //code to get data from db
                return _.find(foods, {id:args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});