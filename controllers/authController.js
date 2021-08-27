require('dotenv').config();
const api_key=process.env.API_KEY;
const axios = require("axios").create({baseUrl: "https://osf-digital-backend-academy.herokuapp.com/api/"});
const authService=require("../services/authServices")
exports.getSignUp=async function (req, res, next) {
    if(!req.session.email) {
        try {
            res.status(200).render("signUp", {
                title: "Alibazon",
                category: "Sign Up",
            })
        } catch (err) {
            res.status(500).json({message: err});
        }
    }
    else{
        res.status(302).redirect('back')
    }

}

exports.postSignUp=async function (req, res, next) {
    try {
        if (req.body.first_name && req.body.first_name && req.body.last_name && req.body.user_name && req.body.user_password && req.body.email) {
            if (req.body.user_password !== req.body.confirm_password) {
                var err = new Error("Passwords do not match.")
                err.status = 400;
                return next(err);
            }
            try {
                await authService.postSignUpServices(req)
                return res.redirect("../profile")
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
}

exports.getSignIn=async function (req, res, next) {
     if(!req.session.email) {
         try {
             res.status(200).render("signIn", {
                 title: "Alibazon",
                 category: "Sign In",
             })
         } catch (err) {
             res.status(500).json({message: err});
         }
     }else{
         res.status(302).redirect('back')
     }
}

exports.postSignIn=async function (req, res, next) {
    try {

        if (req.body.user_password && req.body.email) {
            try {
                await authService.postSignInServices(req)
                return res.redirect("../profile")
            }
            catch (err){
                var err=new Error('Username or password is incorrect');
                err.status=400;
                return next(err);
            }
        } else {
            var err = new Error('Email and password are required');
            err.status = 401;
            return next(err);
        }
    } catch (err) {
        res.status(500).json({message: err});
    }
}
