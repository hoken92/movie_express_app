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

| HTTP Verbs   | Endpoints                              | Action                                 |
| ------------ | -------------------------------------- | -------------------------------------- |
| Users        | ---------                              | ------                                 |
| GET          | /users                                 | To sign up a new user account          |
| GET          | /users/:id                             | To login an existing user account      |
| GET          | /users/:id/reservations                | To create a new cause                  |
| GET          | /users/:id/reservations?movie_id=value | To create a new cause                  |
| Movies       | ---------                              | ------                                 |
| GET          | /movies                                | To retrieve all causes on the platform |
| GET          | /movies/:id                            | To retrieve details of a single cause  |
| PATCH        | /api/causes/:causeId                   | To edit the details of a single cause  |
| Reservations | ---------                              | ------                                 |
| GET          | /users/:id/reservations?movie_id=value | To create a new cause                  |
| DELETE       | /api/causes/:causeId                   | To delete a single cause               |
| GET          | /api/causes/:causeId                   | To retrieve details of a single cause  |
| PATCH        | /api/causes/:causeId                   | To edit the details of a single cause  |

### Technologies Used

- [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
- [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
- [EJS](https://www.npmjs.com/package/ejs) This is a NodeJS view render engine.

### Authors

- [Kenneth Ho](https://github.com/hoken92/)
