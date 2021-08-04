// Module dependencies.
var express = require("express")
  , http    = require("http")
  , path    = require("path")
  , routes  = require("./routes");
var app     = express();
var cookieParser = require('cookie-parser');
var bodyParser=require('body-parser');
var logger = require('morgan');
var session=require('express-session');

//routes
var indexRouter = require('./routes/index');
var helloRouter = require('./routes/hello');

// All environments
app.set("port", 80);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(bodyParser.json());

app.use(cookieParser("61d333a8-6325-4506-96e7-a180035cc26f"));
app.use(session());
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.errorHandler());

// App routes
app.use("/"     , indexRouter);
app.use("/hello", helloRouter);

// Run server
http.createServer(app).listen(app.get("port"), function() {
	console.log("Express server listening on port " + app.get("port"));
});
