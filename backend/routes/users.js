const express = require("express");
const router = express.Router();

const users = require('../models/users');

const userSchema = mongoose.Schema({
  email: {type : String, required: true},
  password: {type : String, required: true}
})

module.exports = mongoose.model("user", userSchema);

router.post("/login", (req, res, next) => {
  const login = find({
    ...req.body
  })  
  next();
});

module.exports = router;
