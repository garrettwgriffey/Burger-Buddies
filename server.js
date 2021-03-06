// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;

var app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
var routes = require("./controllers/burgerController");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

