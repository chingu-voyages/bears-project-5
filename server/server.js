const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressGraphQL = require('express-graphql');
const schema = require("./schema.js");
const Food = require("./models/food");

const app = express();
const db = require("./keys").mongoURI;
app.use(bodyParser.json());

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

/* eslint-disable no-console */
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to database"))
  .catch(err => console.log(err));

app.get("/", (req,res)=>{
  res.send("welcome on blank page!")
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running on port " + port));
/* eslint-enable no-console */
