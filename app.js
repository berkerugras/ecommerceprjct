// Module dependencies.
const express = require("express")
  , http    = require("http")
  , path    = require("path")
  , routes  = require("./routes");
const app     = express();
const cookieParser = require('cookie-parser');
const bodyParser=require('body-parser');
const logger = require('morgan');
const session=require('express-session');
const methodOverride = require('method-override')
const Sentry = require('@sentry/node');
const Tracing = require("@sentry/tracing");

//routes
const indexRouter = require('./routes/index');
const categoryRouter = require('./routes/categories');
const authRouter=require('./routes/auth');

Sentry.init({
	dsn: "https://ca7d3717494b4e3190372605225f86dc@o943735.ingest.sentry.io/5892672",
	integrations: [
		// enable HTTP calls tracing
		new Sentry.Integrations.Http({ tracing: true }),
		// enable Express.js middleware tracing
		new Tracing.Integrations.Express({ app }),
	],

	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,
});

// All environments
app.set("port", process.env.PORT||80);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(methodOverride())
app.use(cookieParser("61d333a8-6325-4506-96e7-a180035cc26f"));
app.use(session({
	secret:"61d333a8-6325-4506-96e7-a180035cc26f",
	resave:true,
	saveUninitialized:false
}));
app.use(express.static(path.join(__dirname, "public")));

//make user ID available in templates
app.use(function (req,res,next){
	res.locals.currentUser=req.session.userid;
	next();
})

// App routes
app.use("/"     , indexRouter);
app.use("/categories", categoryRouter);
app.use("/auth",authRouter);



app.use(Sentry.Handlers.errorHandler());
app.use((req,res,next)=>{
	const err=new Error("not found");
	err.status=404;
	next(err);
})
app.use((err,req,res,next)=>{
	res.status(err.status||500);
	res.render('error.ejs',{
		message: err.message,
		error:err,
		title:'Alibazon'


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

