
const express = require('express');
const router = express.Router();
const _         = require("underscore");
const axios = require("axios").create({baseUrl: "https://osf-digital-backend-academy.herokuapp.com/api/"});
const slug=require("slugify")

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
            varlink:"women"

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
            varlink:"women",

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
            varlink:"women"

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
            varlink:"men"

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
            varlink:"men"

        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/women/jewelry/earrings',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=womens-jewelry-earrings&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Jewelry",
            varlink:"women",
            type:"Earrings"

        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/women/jewelry/necklaces',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=womens-jewelry-necklaces&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Jewelry",
            varlink:"women",
            type:"Necklaces"

        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/women/accessories/scarves',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=womens-accessories-scarves&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Accessories",
            varlink:"women",
            type:"Scarves"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})


router.get('/women/accessories/shoes',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=womens-accessories-shoes&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Accessories",
            varlink:"women",
            type:"Shoes"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/women/clothing/dresses',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=womens-clothing-dresses&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Dresses"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/women/clothing/jackets(%20&%20coats)?',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=womens-clothing-jackets&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Jackets & Coats"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/women/clothing/bottom(s)?',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=womens-clothing-bottoms&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Bottoms"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/women/clothing/top(s)?',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=womens-clothing-tops&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Tops"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/accessories/luggage(s)?',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-accessories-luggage&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Accessories",
            varlink:"men",
            type:"Luggages"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/accessories/glove(s)?',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-accessories-gloves&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Accessories",
            varlink:"men",
            type:"Gloves"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/accessories/tie(s)?',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-accessories-ties&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Accessories",
            varlink:"men",
            type:"Ties"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/clothing/dress(%20shirts)?',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-clothing-dress-shirts&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            type:"Dress Shirts"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})



router.get('/men/clothing/short(s)?',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-clothing-shorts&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            type:"Shorts"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/clothing/jackets(%20&%20coats)?',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-clothing-jackets&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            type:"Jackets & Coats"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/clothing/pant(s)?',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-clothing-pants&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            type:"Pants"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/clothing/suit(s)?',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-clothing-suits&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            type:"Suits"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/women/jewelry/earrings/:productid',async (req, res, next) => {
    try {
       req.params.productid
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Jewelry",
            varlink:"women",
            type:"Earrings"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/women/jewelry/necklaces/:productid',async (req, res, next) => {
    try {
        req.params.productid
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("pdp",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Jewelry",
            varlink:"women",
            type:"Necklaces"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/women/jewelry/necklaces/:productid',async (req, res, next) => {
    try {
        req.params.productid
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Jewelry",
            varlink:"women",
            type:"Necklaces"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})


router.get('/women/accessories/scarves/:productid',async (req, res, next) => {
    try {
        req.params.productid
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Accessories",
            varlink:"women",
            type:"Scarves"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})


router.get('/women/accessories/shoes/:productid',async (req, res, next) => {
    try {
        req.params.productid
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Accessories",
            varlink:"women",
            type:"Shoes"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/women/clothing/dresses/:productid',async (req, res, next) => {
    try {
        req.params.productid
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Dresses"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/women/clothing/dresses/:productid',async (req, res, next) => {
    try {
        req.params.productid
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Dresses"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})


router.get('/women/clothing/jackets(%20&%20coats)?/:productid',async (req, res, next) => {
    try {
        req.params.productid
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Jackets & Coats"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/women/clothing/bottoms/:productid',async (req, res, next) => {
    try {
        req.params.productid
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Bottoms"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/women/clothing/tops/:productid',async (req, res, next) => {
    try {
        req.params.productid
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Tops"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/accessories/luggage(s)?/:productid',async (req, res, next) => {
    try {
        req.params.productid
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Accessories",
            varlink:"men",
            type:"Luggages"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/accessories/glove(s)?/:productid',async (req, res, next) => {
    try {
        req.params.productid
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Accessories",
            varlink:"men",
            type:"Gloves"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/accessories/tie(s)?/:productid',async (req, res, next) => {
    try {
        req.params.productid
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Accessories",
            varlink:"men",
            type:"Ties"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/clothing/dress(%20shirts)?/:productid',async (req, res, next) => {
    try {
        req.params.productid
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            type:"Dress Shirts"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/clothing/short(s)?/:productid',async (req, res, next) => {
    try {
        req.params.productid
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            type:"Shorts"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/clothing/jackets(%20&%20coats)?/:productid',async (req, res, next) => {
    try {
        req.params.productid
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            type:"Jackets & Coats"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})


router.get('/men/clothing/pant(s)?/:productid',async (req, res, next) => {
    try {
        req.params.productid
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            type:"Pants"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/clothing/suit(s)?/:productid',async (req, res, next) => {
    try {
        req.params.productid
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            type:"Suits"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})



module.exports = router;
