const express = require("express");
const router = express.Router();
// const error = require("../utilities/error.js");

// grabbing data from data folder
const users = require("../data/users.js");
const reservations = require("../data/reservations.js");

router.get("/", (req, res) => {
  res.json(users);
});

// Creating a simple GET route for individual users,
// using a route parameter for the unique id.
router.get("/:id", (req, res, next) => {
  const user = users.find((u) => u.id == req.params.id);
  if (user) res.json(user);
  else next();
});

// Retrieves comments made by the user with the specified id.
router.get("/:id/reservations", (req, res, next) => {
  if (req.query.movie_id) {
    // look for a query of matching movieId and show relevant reservations
    const userReservation = reservations.filter((r) => {
      if (r.userId == req.params.id && r.movieId == req.query.movie_id) {
        return r;
      }
    });

    if (userReservation.length > 0) {
      res.json(userReservation);
    } else {
      next();
    }
  } else {
    const userReservation = reservations.filter((r) => {
      if (r.userId == req.params.id) {
        return r;
      }
    });

    if (userReservation.length > 0) {
      res.json(userReservation);
    } else {
      next();
    }
  }
});

module.exports = router;
