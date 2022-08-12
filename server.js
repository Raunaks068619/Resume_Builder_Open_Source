// server/index.js

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./backend/routes/routes");
const cors = require("cors");
require("dotenv/config");

const PORT = process.env.PORT || 3001;

mongoose
  .connect(
    "mongodb+srv://raunaks068:raunaks068@cluster0.dvp4n.mongodb.net/users?retryWrites=true&w=majority",
    {}
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.use("/api", routes.router);


