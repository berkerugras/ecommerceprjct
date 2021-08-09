
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
            parentcategory:"Men",
            varlink:"men"


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
            parentcategory:"Women",
            varlink:"women"
        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/women/clothing',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/categories/parent/womens-clothing?secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("subcategory",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",

        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/women/jewelry',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/categories/parent/womens-jewelry?secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("subcategory",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Jewelry",

        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})


router.get('/women/accessories',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/categories/parent/womens-accessories?secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("subcategory",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Accessories",

        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})


router.get('/men/clothing',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/categories/parent/mens-clothing?secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("subcategory",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",

        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/accessories',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/categories/parent/mens-accessories?secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("subcategory",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Accessories",

        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})
module.exports = router;
