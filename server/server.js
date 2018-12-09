const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/items");
const expressGraphQL = require('express-graphql');
const schema = require("./schema.js");

const app = express();

app.use(bodyParser.json());

const db = require("./keys").mongoURI;

/* eslint-disable no-console */
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected"))
  .catch(err => console.log(err));
//use REST routes
// app.use('/api/items', items);

//use GraphQL

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}));



const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running on port " + port));
/* eslint-enable no-console */
