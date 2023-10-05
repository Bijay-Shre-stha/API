const express = require("express");
const app = express();

const { portController } = require("./controller/pageController");
const connectDB = require("./database/database");


// Database connection
connectDB();

// Setting the view engine to EJS
app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const dataRouter = require("./Router/dataRouter")
app.use("", dataRouter)

// Start the server
const port = 3000;
app.listen(port, portController);
