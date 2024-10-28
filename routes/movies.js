const express = require("express");
const router = express.Router();

const error = require("../utils/error.js");
const users = require("../data/users.js");
const movies = require("../data/movies.js");
const reservations = require("../data/reservations.js");

router.get("/", (req, res) => {
  res.json(movies);
});

router.get("/:id", (req, res) => {
  const movie = movies.find((m) => req.params.id == m.id);

  if (movie) res.json(movie);
  else next();
});

module.exports = router;
