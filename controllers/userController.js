require('dotenv').config();
const api_key=process.env.API_KEY;
const axios = require("axios").create({baseUrl: "https://osf-digital-backend-academy.herokuapp.com/api/"});
const _         = require("underscore");
const userServices=require("../services/userServices")

exports.profileController=function (req,res,next){
    if(!req.session.userid){
        const err=new Error("You are not authorized to view this content!")
        err.status=403
        return next(err);
    }
    res.status(200).render('profile',{
        title:"Alibazon",
        category:"Profile",
        username:req.session.userName,
        email:req.session.email
    })
}

exports.logoutController=function (req,res,next){
    if(req.session){
        req.session.destroy(function (err){
            if(err){
                return next(err);
            }else{
                return res.redirect('/');
            }
        });
    }
}

exports.getcartController=async function (req, res, next) {
    try {
        if (req.session.userid && req.session.token) {
            try {
                const response=await userServices.getCartServices(req)
                res.status(200).render("cart",{
                    _:_,
                    title:"Alibazon",
                    items:response.data,
                    apiKey:api_key
                })

            } catch (err) {
                err.status = 400;
                return res.status(400).render("cart",{
                    _:_,
                    title:"Alibazon",
                    items:undefined,
                    apiKey:api_key
                });
            }
        } else {
            res.redirect('./auth/signin')

        }
    } catch (err) {
        res.status(500).json({message: err});
    }
}

exports.postCartController=async function (req, res, next) {
    try {
        if (req.session.userid && req.session.token) {

            try {
                await userServices.postCartServices(req)
                res.status(200).redirect('back')
            }
            catch (err){
                var err=new Error('Couldnt send the data to the end-point');
                err.status=400;
                return next(err);
            }
        } else {
            res.redirect('./auth/signin')

        }
    } catch (err) {
        res.status(500).json({message: err});
    }
}

exports.getCartProduct=async (req, res, next) => {
    try {
        const response=await userServices.getCartProductServices(req)
        res.status(200).send(response.data)
    } catch (err) {
        res.status(500).json({message: err});
    }

}

exports.removeCartItem=async (req, res, next) => {
    try {
        await userServices.removeCartItemServices(req)
        res.status(200).redirect('back')
    } catch (err) {
        res.status(500).json({message: err});
    }

}

exports.changeQuantityController=async (req, res, next) => {
    try{
        const response=await userServices.changeQuantityServices(req)
        res.status(200).send(response.data)

    }catch (err){

    }
}
