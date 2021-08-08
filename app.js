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
var methodOverride = require('method-override')


//routes
var indexRouter = require('./routes/index');
var helloRouter = require('./routes/hello');

// All environments
app.set("port", 80);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(methodOverride())
app.use(cookieParser("61d333a8-6325-4506-96e7-a180035cc26f"));
app.use(session());
app.use(express.static(path.join(__dirname, "public")));

// App routes
app.use("/"     , indexRouter);
app.use("/categories", helloRouter);
app.use((req,res,next)=>{
	const err=new Error("not found");
	err.status=404;
	next(err);
})
app.use((err,req,res,next)=>{
	res.status(err.status||500);
	res.render('error.ejs',{
		message: err.message,
		error:err


	})
	res.json({
		error:{
			message:err.message
		}
	})
})


// Run server
app.listen(app.get('port'),()=>{
	console.log("Express Server Listening on port 80");
});

