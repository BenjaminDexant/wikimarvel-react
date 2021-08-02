import {} from "dotenv/config.js";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";

import schema from "./graphqlSchema/schema.mjs";

const port = process.env.PORT || 3000;;

const app = express();

app.use(cors(), graphqlHTTP({ schema, graphiql: true }));

app.listen(port, console.log(`Running on port ${port}`));
