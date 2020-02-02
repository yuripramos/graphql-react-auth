const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const userType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    email: {
      type: GraphQLString
    }
  }
});

module.exports = UserType;
