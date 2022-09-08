const { ApolloServer, gql, ForbiddenError } = require("apollo-server-express");
const express = require("express");
const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");
const jwt = require("jsonwebtoken");

require("dotenv-safe").config();

const app = express();

const context = ({ req }) => {
  const auth = req.headers.authorization;
  let authenticated = "";
  const token = String(auth).replace("Bearer ", "");
  if (token !== "undefined") {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) throw new ForbiddenError("Invalid token");
      authenticated = decoded?.user;
    });
  }
  return { user: authenticated };
};
const server = new ApolloServer({ typeDefs, resolvers, context });

server.start().then((res) => {
  server.applyMiddleware({ app });

  app.listen({ port: 3000 }, () =>
    console.log("Now browse to http://localhost:3000" + server.graphqlPath)
  );
});
