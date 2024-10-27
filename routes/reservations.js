const express = require("express");
const router = express.Router();

const error = require("../utils/error.js");
const users = require("../data/users.js");
const movies = require("../data/movies.js");
const reservations = require("../data/reservations.js");

router.get("/", (req, res) => {
  res.json(reservations);
});

router.get("/:id", (req, res, next) => {
  const booking = reservations.find((r) => req.params.id == r.id);

  if (booking) res.json(booking);
  else next();
});

// Create a Reservation
router.post("/", (req, res, next) => {
  if (req.body.userId && req.body.movieId && req.body.show_date) {
    const newReservation = {
      id: reservations[reservations.length - 1].id + 1,
      userId: req.body.userId,
      movieId: req.body.movieId,
      show_date: req.body.show_date,
      seat_number: Math.floor(Math.random() * 20),
    };

    reservations.push(newReservation);
    res.json(newReservation);
  } else {
    console.log("this is working");
    next(error(400, "Insufficient Data"));
  }
});

// Update a Reservation
router.patch("/:id", (req, res, next) => {
  // Within the patch request route, we allow the client to make changes to an existing user in the database
  const comment = comments.find((c, index) => {
    if (c.id == req.params.id) {
      //req.body holds the update for the user
      for (const key in req.body) {
        // applying the req.body keys to the existing user keys, overwriting them
        comments[index][key] = req.body[key];
      }

      // returns the updated user, otherwise it would just return a boolean
      return true;
    }
  });

  if (comment) res.json(comment);
  else next();
});

// Delete a Reservation
router.delete("/:id", (req, res, next) => {
  const comment = comments.find((c, i) => {
    if (c.id == req.params.id) {
      comments.splice(i, 1);
      return true;
    }
  });

  if (comment) res.json(comment);
  else next();
});

module.exports = router;
