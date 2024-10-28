const express = require("express");
const router = express.Router();

const error = require("../utils/error.js");
const users = require("../data/users.js");
const movies = require("../data/movies.js");
const reservations = require("../data/reservations.js");

router.get("/", (req, res) => {
  res.json(movies);
});

router.get("/:id", (req, res, next) => {
  const movie = movies.find((m) => req.params.id == m.id);

  if (movie) res.json(movie);
  else next();
});

router.get("/:id/reservations", (req, res, next) => {
  // Retreives all movie reservations that match the movie ID
  const movieReservation = reservations.filter((r) => {
    if (r.movieId == req.params.id) {
      return r;
    }
  });

  if (movieReservation.length > 0) {
    res.json(movieReservation);
  } else {
    next();
  }
});

module.exports = router;
