const express = require("express");
const mongoose = require("mongoose");
const MONGODB_URI = require('./config/keys');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(MONGODB_URI || 'mongodb://localhost/tinyImprovements', { useNewUrlParser: true });

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
require('./routes/apiRoutes')(app);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});