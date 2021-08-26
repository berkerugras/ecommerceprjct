require('dotenv').config();
const api_key=process.env.API_KEY;
const axios = require("axios").create({baseUrl: "https://osf-digital-backend-academy.herokuapp.com/api/"});

exports.postSignUpServices=async function (req) {
    const user = {
        "secretKey": api_key,
        "name": req.body.user_name,
        "email": req.body.email,
        "password": req.body.user_password
    }

    const response = await axios.post("https://osf-digital-backend-academy.herokuapp.com/api/auth/signup",user);
    req.session.userid=response.data.user._id;
    req.session.userName=response.data.user.name
    req.session.email=response.data.user.email;
    req.session.token=response.data.token;
}

exports.postSignInServices=async function(req){
    const user = {
        "secretKey": api_key,
        "email": req.body.email,
        "password": req.body.user_password
    }

    const response = await axios.post("https://osf-digital-backend-academy.herokuapp.com/api/auth/signin",user);
    req.session.token=response.data.token;
    req.session.userid=response.data.user._id;
    req.session.userName=response.data.user.name
    req.session.email=response.data.user.email;
}
