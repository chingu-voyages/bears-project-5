const _ = require('lodash');
const Food = require('./models/food');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

// var foods = [
//     {name: "banana", kcal: 150, id: "1"},
//     {name: "chicken", kcal: 300, id: "2"}
// ]

const FoodType = new GraphQLObjectType({
    name: 'Food',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: new GraphQLNonNull(GraphQLString)},
        kcal: {type: new GraphQLNonNull(GraphQLInt)}
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields: {
        food: {
            type: FoodType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                //code to get data from db
                //return _.find(foods, {id:args.id});
                return Food.findById(args.id);
            }
        },
        foods: {
            type: new GraphQLList(FoodType),
            resolve(parent, args){
                //return foods;
                return Food.find({});
            }
        }
    }
});


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addFood: {
            type: FoodType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                kcal: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parent, args){
                let food = new Food({
                    name: args.name,
                    kcal: args.kcal
                });
                return food.save();
            }
        }
    }
})




module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});