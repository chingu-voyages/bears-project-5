const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');


const FoodQuery = new GraphQLObjectType({
    name: 'Food',
    fields: ()=>({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        kcal: {type: GraphQLInt}

    });
});



module.exports = new GraphQLSchema({

});