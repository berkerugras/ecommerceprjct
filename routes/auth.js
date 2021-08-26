const express = require('express');
const router = express.Router();
require('dotenv').config();
const authController=require("../controllers/authController")

router.get('/signup',authController.getSignUp)


router.post('/signup',authController.postSignUp)

router.get('/signin',authController.getSignIn)

router.post('/signin',authController.postSignIn)





module.exports=router;
