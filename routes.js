exports.index = function(req, res) {
	res.render("index", {
		// Template data
		title: "Alibazon"
	});
};


exports.hello = function(req, res) {
	var _         = require("underscore");
	var mdbClient = require('mongodb').MongoClient;

	mdbClient.connect("mongodb://localhost:27017/", function(err, client) {
		if(err){
			res.json(err)
		}
		let db=client.db("shop");
		const collection = db.collection('categories');

		collection.find().toArray(function(err, items) {
			res.render("hello", {
				// Underscore.js lib
				_     : _,

				// Template data
				title : "Alibazon",
				items : items

			});
			client.close();
		});
	});
};
