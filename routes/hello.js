
const express = require('express');
const router = express.Router();
const _         = require("underscore");
const mdbClient = require('mongodb').MongoClient;


router.get('/',function (req,res,next){
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
})

module.exports = router;
