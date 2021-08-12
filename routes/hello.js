
const express = require('express');
const router = express.Router();
const _         = require("underscore");
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
            type:"Ear Rings"

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

router.get('/women/clothing/jacket*',async (req, res, next) => {
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
            type:"Jacket and Coats"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/women/clothing/bottom*',async (req, res, next) => {
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

router.get('/women/clothing/top*',async (req, res, next) => {
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

router.get('/men/accessories/luggage*',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-accessories-luggage&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Luggages"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/accessories/glove*',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-accessories-gloves&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Gloves"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/accessories/tie*',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-accessories-ties&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Ties"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/clothing/dress*',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-clothing-dress-shirts&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Dress Shirts"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})



router.get('/men/clothing/short*',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-clothing-shorts&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Shorts"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/clothing/jacket*',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-clothing-jackets&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Jackets"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/clothing/pant*',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-clothing-pants&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Jackets"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})

router.get('/men/clothing/suit*',async (req, res, next) => {
    try {
        const response = await axios({
            url: "http://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id=mens-clothing-suits&secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
            method: "get",
        });
        res.status(200).render("products",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Suits"


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

})
module.exports = router;
