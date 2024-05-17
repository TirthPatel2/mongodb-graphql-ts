const dotenv = require("dotenv");
dotenv.config();

const path = require("path");

require("./mongodb/connection");

const express = require("express");

const { ApolloServer } = require("apollo-server-express");

const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const PORT = process.env.PORT || 5000;

const typeDefs = loadFilesSync(path.join(__dirname, "./graphql/**/*.graphql"));
const resolvers = loadFilesSync(
  path.join(__dirname, "./graphql/**/*.resolvers.ts")
);

async function startApolloServer() {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({ schema });

  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(PORT, () => {
    console.log(`[Server]: server running on port ${PORT}`);
  });
}

startApolloServer();
