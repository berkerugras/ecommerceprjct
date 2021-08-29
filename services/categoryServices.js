const _         = require("underscore");
const axios = require("axios").create({baseUrl: "https://osf-digital-backend-academy.herokuapp.com/api/"});
require('dotenv').config();
const api_key=process.env.API_KEY;

exports.menServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/categories/parent/mens?secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.womenCategoryServices=async function (){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/categories/parent/womens?secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.womenClothingServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/categories/parent/womens-clothing?secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.womenJewelryServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/categories/parent/womens-jewelry?secretKey="+api_key,
        method: "get",
    });
    return response
}

exports.womenAccessoriesServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/categories/parent/womens-accessories?secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.menClothingServices=async function (){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/categories/parent/mens-clothing?secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.menAccessoriesServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/categories/parent/mens-accessories?secretKey="+api_key,
        method: "get",
    });
    return response
}

exports.womenEarringsServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=womens-jewelry-earrings&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.womenNecklacesServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=womens-jewelry-necklaces&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.womenScarvesServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=womens-accessories-scarves&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.womenShoesServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=womens-accessories-shoes&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.womenDressesServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=womens-clothing-dresses&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.womenJacketServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=womens-clothing-jackets&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.womenBottomsServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=womens-clothing-bottoms&secretKey="+api_key,
        method: "get",
    });
    return response;
}


exports.womenTopsServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=womens-clothing-tops&secretKey="+api_key,
        method: "get",
    });
    return response
}



exports.menLuggagesServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-accessories-luggage&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.menGlovesServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-accessories-gloves&secretKey="+api_key,
        method: "get",
    });
    return response
}

exports.menTiesServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-accessories-ties&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.menShortsServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-clothing-shorts&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.menJacketServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-clothing-jackets&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.menPantsServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-clothing-pants&secretKey="+api_key,
        method: "get",
    });
    return response
}

exports.menSuitsServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-clothing-suits&secretKey="+api_key,
        method: "get",
    });

    return response
}

exports.menDressServices=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-clothing-dress-shirts&secretKey="+api_key,
        method: "get",
    });
    return response
}

exports.womenEarringsProductServices=async function (req){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey="+api_key,
        method: "get",
    });
    return response
}

exports.womenNecklacesProductServices=async function(req){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey="+api_key,
        method: "get",
    });
    return response
}

exports.womenScarvesProductServices=async function(req){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey="+api_key,
        method: "get",
    });
    return response
}

exports.womenShoesProductServices=async function(req){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey="+api_key,
        method: "get",
    });
    return response
}


exports.womenDressesProductServices=async function(req){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.womenJacketProductServices=async function(req){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.womenBottomsProductServices=async function(req){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.womenTopsProductServices=async function(req){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.menLuggagesProductServices=async function(req){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.menGlovesProductServices=async function(req){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.menTiesProductServices=async function(req){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.menDressProductServices=async function(req){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.menShortsProductServices=async function(req){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.menJacketProductServices=async function(req){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.menPantsProductServices=async function(req){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey="+api_key,
        method: "get",
    });
    return response;
}

exports.menSuitsProductServices=async function(req){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey="+api_key,
        method: "get",
    });
    return response;
}
