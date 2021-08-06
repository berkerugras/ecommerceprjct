const express = require('express');
const router = express.Router();
const _         = require("underscore");
const mdbClient = require('mongodb').MongoClient;

const records  =require('../records');

// function asyncHandler(cb){
//     return async (req, res, next)=>{
//         try {
//             await cb(req,res, next);
//         } catch(err){
//             next(err);
//         }
//     };
// }


router.get('/',function (req,res,next){
    mdbClient.connect("mongodb://localhost:27017/", function(err, client) {
        if(err){
            res.json(err)
        }
        let db=client.db("shop");
        const collection = db.collection('categories');


        collection.find().toArray(function(err, items) {
            res.render("index", {
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
