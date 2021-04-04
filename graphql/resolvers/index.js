const postsResolvers = require("./posts");
const usersResolvers = require("./users");

//resolvers: for each query/mutation/subscription has a corresponding resolver.
//processes the logic and returns what the query returns

module.exports = {
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
  },
};
