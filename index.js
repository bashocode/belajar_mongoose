require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
// Express
const express = require("express");
const app = express();

// Body parser
app.use(express.json()); // Enable json req.body
app.use(
  express.urlencoded({
    extended: true,
  })
); // Enable req.body urlencoded

// import router and use that route
const characterRoutes = require('./routes/character');
// this will be define the route of the app
app.use('/', characterRoutes);

// Run server
app.listen(3000, () => console.log("Server running on 3000"));
