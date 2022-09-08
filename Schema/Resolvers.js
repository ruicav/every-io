const queries = require("./query");
const mutations = require("./mutations");

const resolvers = {
  Query: { ...queries },

  Mutation: {
    ...mutations,
  },
};

module.exports = { resolvers };
