const express = require("express");
const router = express.Router();

const error = require("../utils/error.js");
const users = require("../data/users.js");
const movies = require("../data/movies.js");
const reservations = require("../data/reservations.js");

// const form = document.getElementById("new_reservation");

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
  if (
    req.body.firstname &&
    req.body.lastname &&
    req.body.movieId &&
    req.body.show_date
  ) {
    const newReservation = {
      id: reservations[reservations.length - 1].id + 1,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      movieId: req.body.movieId,
      show_date: req.body.show_date,
      seat_number: Math.ceil(Math.random() * 20),
    };
    console.log(newReservation);
    reservations.push(newReservation);
    res.json(newReservation);
  } else {
    next(error(400, "Insufficient Data"));
  }
});

// Update a Reservation
router.patch("/:id", (req, res, next) => {
  const booking = reservations.find((r, index) => {
    if (r.id == req.params.id) {
      //req.body holds the update for the user
      for (const key in req.body) {
        // applying the req.body keys to the existing user keys, overwriting them
        reservations[index][key] = req.body[key];
      }

      // returns the updated user, otherwise it would just return a boolean
      return true;
    }
  });

  if (booking) res.json(booking);
  else next();
});

// Delete a Reservation
router.delete("/:id", (req, res, next) => {
  const booking = reservations.find((r, i) => {
    if (r.id == req.params.id) {
      reservations.splice(i, 1);
      return true;
    }
  });

  if (booking) res.json(booking);
  else next();
});

module.exports = router;
