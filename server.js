var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'app/public', "home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, 'app/public', "survey.html"));
  });


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });