
const express = require('express');
const router = express.Router();
const _         = require("underscore");
const mdbClient = require('mongodb').MongoClient;
const axios = require("axios").create({baseUrl: "https://osf-digital-backend-academy.herokuapp.com/api/"});

// function asyncHandler(cb){
//     return async (req, res, next)=>{
//         try {
//             await cb(req,res, next);
//         } catch(err){
//             next(err);
//         }
//     };
// }


router.get('/',async function (req, res, next) {
    try {
        await res.redirect("/categories/women")
    }catch (err){
        res.status(500).json({message: err});
    }
})

router.get('/men',async function (req, res, next) {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/categories/parent/mens?secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("hello", {
            _: _,
            title: "Alibazon",
            items: response.data,
            category:"Mens",
            parentcategory:"Men"

        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})



router.get('/women',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/categories/parent/womens?secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("hello",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Women"
        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})
module.exports = router;
