const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressGraphQL = require("express-graphql");
const cors = require("cors");
const schema = require("./schema.js");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

const db = require("./keys").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  // eslint-disable-next-line no-console
  .then(() => console.log("Connected to database"))
  // eslint-disable-next-line no-console
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("welcome on blank page!");
});

const port = process.env.PORT || 5000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log("Server running on port " + port));
