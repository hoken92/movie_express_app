const express = require("express");
const router = express.Router();

const users = require("../data/users.js");
const movies = require("../data/movies.js");
const reservations = require("../data/reservations.js");

router.get("/", (req, res) => {
  res.json(reservations);
});

module.exports = router;
