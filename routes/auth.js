const express = require('express');
const router = express.Router();
const _         = require("underscore");
const bodyParser = require("body-parser");
require('dotenv').config();
const api_key=process.env.API_KEY;
const axios = require("axios").create({baseUrl: "https://osf-digital-backend-academy.herokuapp.com/api/"});


router.get('/signup',async function (req, res, next) {
    try {
        res.status(200).render("signUp", {
            title: "Alibazon",
            category:"Sign Up",
        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})


router.post('/signup',async function (req, res, next) {
    try {
        console.log(req.body.first_name)
        if (req.body.first_name && req.body.first_name && req.body.last_name && req.body.user_name && req.body.user_password && req.body.email) {
            if (req.body.user_password !== req.body.confirm_password) {
                var err = new Error("Passwords do not match.")
                err.status = 400;
                return next(err);
            }
            try {
                const user = {
                    "secretKey": api_key,
                    "name": req.body.user_name,
                    "email": req.body.email,
                    "password": req.body.user_password
                }

                const response = await axios.post("https://osf-digital-backend-academy.herokuapp.com/api/auth/signup",user);
                console.log(response.data.token)
                return res.redirect("/categories/women")
            }
            catch (err){
                var err=new Error('Couldnt send the data to the end-point');
                err.status=400;
                return next(err);
            }
        } else {
            var err = new Error('All fields required');
            err.status = 400;
            return next(err);
        }
    } catch (err) {
        res.status(500).json({message: err});
    }
})

router.get('/signin',async function (req, res, next) {
    try {
        res.status(200).render("signIn", {
            title: "Alibazon",
            category:"Sign In",
        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.post('/signin',async function (req, res, next) {
    try {

        if (req.body.user_password && req.body.email) {
            try {
                const user = {
                    "secretKey": api_key,
                    "email": req.body.email,
                    "password": req.body.user_password
                }

                const response = await axios.post("https://osf-digital-backend-academy.herokuapp.com/api/auth/signin",user);
                console.log(response.data.token)
                return res.redirect("/categories/women")
            }
            catch (err){
                var err=new Error('Username or password is incorrect');
                err.status=400;
                return next(err);
            }
        } else {
            var err = new Error('All fields required');
            err.status = 400;
            return next(err);
        }
    } catch (err) {
        res.status(500).json({message: err});
    }
})





module.exports=router;
