const _ = require("lodash");
const graphql = require("graphql");
const { GraphQLSchema } = graphql;

const RootQueryType = require("./types/user_type");
const mutations = require("./mutations");

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: mutations
});
