require('dotenv').config();
const api_key=process.env.API_KEY;
const axios = require("axios").create({baseUrl: "https://osf-digital-backend-academy.herokuapp.com/api/"});
const _         = require("underscore");


exports.getCartServices=async function(req){
    const config = {
        headers: {Authorization: `Bearer ${req.session.token}`}
    }
    const response = await axios.get("https://osf-digital-backend-academy.herokuapp.com/api/cart?secretKey="+api_key, config);
    return response

}

exports.postCartServices=async function (req){
    const config = {
        headers: { Authorization: `Bearer ${req.session.token}` }
    }
    const cart = {
        "secretKey": api_key,
        "productId": req.body.productID,
        "variantId": req.body.variantID,
        "quantity": "1"
    }

    const response = await axios.post("https://osf-digital-backend-academy.herokuapp.com/api/cart/addItem", cart, config);
}


exports.getCartProductServices=async function(req){
    req.params.productid
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.removeCartItemServices=async function(req){
    const response = await axios.delete("https://osf-digital-backend-academy.herokuapp.com/api/cart/removeItem",{
        headers: { Authorization: `Bearer ${req.session.token}`},
        data: {
            "secretKey": api_key,
            "productId": req.params.productid,
            "variantId": req.params.variantid,
        }
    })
}

exports.changeQuantityServices=async function(req){
    const config = {
        headers: { Authorization: `Bearer ${req.session.token}` }
    }
    const quantity = {
        "secretKey": api_key,
        "productId": req.params.productid,
        "variantId": req.params.variantid,
        "quantity":  req.params.quantity
    }
    const response = await axios.post("https://osf-digital-backend-academy.herokuapp.com/api/cart/changeItemQuantity",quantity,config)
    return response
}

//

exports.getWishlistServices=async function(req){
    const config = {
        headers: {Authorization: `Bearer ${req.session.token}`}
    }
    const response = await axios.get("https://osf-digital-backend-academy.herokuapp.com/api/wishlist?secretKey="+api_key, config);
    return response
}


exports.postWishlistServices=async function (req){
    const config = {
        headers: { Authorization: `Bearer ${req.session.token}` }
    }
    console.log(req.body.WLproductID,req.body.WLvariantID)
    const wishlist = {
        "secretKey": api_key,
        "productId": req.body.WLproductID,
        "variantId": req.body.WLvariantID,
        "quantity": "1"
    }

    const response = await axios.post("https://osf-digital-backend-academy.herokuapp.com/api/wishlist/addItem", wishlist, config);
}


exports.getWishlistProduct=async function(req){
    req.params.productid
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.removeWishlistItem=async function(req){
    const response = await axios.delete("https://osf-digital-backend-academy.herokuapp.com/api/wishlist/removeItem",{
        headers: { Authorization: `Bearer ${req.session.token}`},
        data: {
            "secretKey": api_key,
            "productId": req.params.productid,
            "variantId": req.params.variantid,
        }
    })
}

exports.changeWLQuantityServices=async function(req){
    const config = {
        headers: { Authorization: `Bearer ${req.session.token}` }
    }
    const quantity = {
        "secretKey": api_key,
        "productId": req.params.productid,
        "variantId": req.params.variantid,
        "quantity":  req.params.quantity
    }
    const response = await axios.post("https://osf-digital-backend-academy.herokuapp.com/api/wishlist/changeItemQuantity",quantity,config)
    return response
}
