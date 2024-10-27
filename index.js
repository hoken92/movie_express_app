require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const error = require("./utils/error.js");
const usersRouter = require("./routes/users.js");
const moviesRouter = require("./routes/movies.js");
const reservationsRouter = require("./routes/reservations.js");

// Middleware
// Allows us to read form data
app.use(express.urlencoded({ extended: true }));
// Allows us to read json data
app.use(express.json({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to my Express API");
});

// Router for users/movies/reservations
app.use("/users", usersRouter);
app.use("/movies", moviesRouter);
app.use("/reservations", reservationsRouter);

// 404 Error Handling Middleware
app.use((req, res, next) => {
  next(error(404, "Resource Not Found"));
});

// 404 Error Handling Middleware
app.use((req, res, next) => {
  next(error(404, "Resource Not Found"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
