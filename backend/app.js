const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const saucesRoute = require("./routes/sauces");
const usersRoute = require("./routes/users");

mongoose
  .connect(
    "mongodb+srv://user-test:a@cluster0.kkkjk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/sauces", saucesRoute);
app.use("/api/auth", usersRoute);

module.exports = app;
