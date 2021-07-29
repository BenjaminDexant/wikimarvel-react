import {} from "dotenv/config.js";
import express from "express";
import { graphqlHTTP } from "express-graphql";

import schema from "./schema.mjs";

const port = 5000;

const app = express();

app.use(graphqlHTTP({ schema, graphiql: true }));

app.listen(port, console.log(`Running on port ${port}`));
