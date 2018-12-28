const Food = require("./models/food");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = require("graphql");
//test
const UserWeightType = new GraphQLObjectType({
  name: "userWeight",
  fields: {
    weightInGrams: { type: GraphQLInt },
    date: { type: GraphQLInt }
  }
});

const UserGoalType = new GraphQLObjectType({
  name: "goal",
  fields: {
    date: { type: GraphQLInt },
    message: { type: GraphQLString },
    weightInGrams: { type: GraphQLInt }
  }
});

const UserType = new GraphQLObjectType({
  name: "user",
  fields: {
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    weight: { type: new GraphQLList(UserWeightType) },
    goals: { type: new GraphQLList(UserGoalType) }
  }
});

const FoodUnitType = new GraphQLObjectType({
  name: "foodUnit",
  description: "food unit (count, grams, liters...)",
  fields: {
    id: { type: GraphQLID },
    unit: { type: new GraphQLNonNull(GraphQLString) }
  }
});

const CaloryPerFoodUnitType = new GraphQLObjectType({
  name: "caloryPerFoodUnit",
  fields: {
    count: {
      type: GraphQLInt
    },
    unit: {
      type: new GraphQLNonNull(FoodUnitType)
    }
  }
});

const FoodType = new GraphQLObjectType({
  name: "Food",
  description: "Food",
  fields: () => ({
    id: { type: GraphQLID },
    kcal: {type: GraphQLInt},
    name: { type: new GraphQLNonNull(GraphQLString) },
    caloryPerFoodUnits: { type: new GraphQLList(CaloryPerFoodUnitType) }
  })
});

const UserFoodType = new GraphQLObjectType({
  name: "userFood",
  description: "Food user consumed",
  fields: {
    id: {
      type: GraphQLID
    },
    user: {
      type: GraphQLString
    },
    food: {
      type: FoodType
    },
    unit: {
      type: FoodUnitType
    },
    count: {
      type: GraphQLInt
    },
    date: {
      type: GraphQLInt
    }
  }
});

const RootQuery = new GraphQLObjectType({
  name: "root",
  description: "root query",
  fields: {
    food: {
      type: new GraphQLList(FoodType),
      args: { id: { type: GraphQLID }, name: {type: GraphQLString} },
      resolve(parent, args) {
        if (args.id) {
          return [Food.findById(args.id)];
        }
        if (args.name) {
          return Food.find({name:args.name});
        }
        return Food.find();
      }
    },
    userFoods: {
      type: new GraphQLList(UserFoodType)
    },
    users: {
      type: new GraphQLList(UserType)
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addFood: {
      type: FoodType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        kcal: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let food = new Food({
          name: args.name,
          kcal: args.kcal
        });
        return food.save();
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

module.exports = schema;
