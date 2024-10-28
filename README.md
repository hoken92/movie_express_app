# Movie Website

### Introduction

This Express API contains users, movie listings and reservations made by users.

- Users have an existing movie reservation.
- Movie listings are displayed and are available show dates.
- Reservations are connected to Users and Movie listings

### Installation Guide

- Clone this repository
- Run npm install to install all dependencies
- Create an .env file in your project root folder and add your PORT variable.

### Usage

- Run npm run dev: to start the application.
- Connect to the API using Postman on port 3000.

### API Endpoints

| HTTP Verbs   | Endpoints                              | Action                                                                |
| ------------ | -------------------------------------- | --------------------------------------------------------------------- |
| Users        | ---------                              | ------                                                                |
| GET          | /users                                 | Retrieves all users                                                   |
| GET          | /users/:id                             | Retrieves a user by id param                                          |
| GET          | /users/:id/reservations                | Retrieves reservations made by user id param                          |
| GET          | /users/:id/reservations?movie_id=value | Retrieves reservations made by user id param AND movie id query value |
| Movies       | ---------                              | ------                                                                |
| GET          | /movies                                | Retrieves all movie listings                                          |
| GET          | /movies/?genre=value                   | Retrieves movie listings by genre query value (lowercase)             |
| GET          | /movies/:id                            | Retrieves a movie listing by id param                                 |
| GET          | /movies/:id/reservations               | Retrieves all reservations by movie id param                          |
| Reservations | ---------                              | ------                                                                |
| GET          | /reservations                          | Retrieves all reservations                                            |
| POST         | /reservations                          | Creates a reservation                                                 |
| PATCH/PUT    | /reservations/:id                      | Updates a reservation by id param                                     |
| DELETE       | /reservations/:id                      | Deletes a reservation by id param                                     |

### Technologies Used

- [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
- [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
- [EJS](https://www.npmjs.com/package/ejs) This is a NodeJS view render engine.

### Authors

- [Kenneth Ho](https://github.com/hoken92/)
