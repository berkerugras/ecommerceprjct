const _         = require("underscore");
const axios = require("axios").create({baseUrl: "https://osf-digital-backend-academy.herokuapp.com/api/"});
require('dotenv').config();
const api_key=process.env.API_KEY;
const categoryServices=require('../services/categoryServices')
exports.menController=async function (req, res, next) {
    try {
        const response = await categoryServices.menServices()
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

}

exports.womenCategoryController=async (req, res, next) => {
    try {
        const response = await categoryServices.womenCategoryServices()
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

}


exports.womenClothingController=async (req, res, next) => {
    try {
        const response = await categoryServices.womenClothingServices()
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

}

exports.womenJewelryController=async (req, res, next) => {
    try {
        const response = await categoryServices.womenJewelryServices()
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

}

exports.womenAccessoriesController=async (req, res, next) => {
    try {
        const response = await categoryServices.womenAccessoriesServices()
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

}

exports.menClothingController=async (req, res, next) => {
    try {
        const response = await categoryServices.menClothingServices()
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

}

exports.menAccessoriesController=async (req, res, next) => {
    try {
        const response = await categoryServices.menAccessoriesServices()
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

}

exports.womenEarringsController=async (req, res, next) => {
    try {
        const response = await categoryServices.womenEarringsServices()
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

}


exports.womenNecklacesController=async (req, res, next) => {
    try {
        const response = await categoryServices.womenNecklacesServices()
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

}


exports.womenScarvesController=async (req, res, next) => {
    try {
        const response = await categoryServices.womenScarvesServices()
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

}

exports.womenShoesController=async (req, res, next) => {
    try {
        const response = await categoryServices.womenShoesServices()
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

}

exports.womenDressesController=async (req, res, next) => {
    try {
        const response = await categoryServices.womenDressesServices();
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

}

exports.womenJacketController=async (req, res, next) => {
    try {
        const response = await categoryServices.womenJacketServices()
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

}

exports.womenBottomsController=async (req, res, next) => {
    try {
        const response = await categoryServices.womenBottomsServices()
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

}

exports.womenTopsController=async (req, res, next) => {
    try {
        const response = await categoryServices.womenTopsServices();
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

}

exports.menLuggagesController=async (req, res, next) => {
    try {
        const response = await categoryServices.menLuggagesServices()
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

}

exports.menGlovesController=async (req, res, next) => {
    try {
        const response = await categoryServices.menGlovesServices()
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

}

exports.menTiesController=async (req, res, next) => {
    try {
        const response = await categoryServices.menTiesServices()
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

}

exports.menDressController=async (req, res, next) => {
    try {
        const response = await categoryServices.menDressServices()
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

}

exports.menShortController=async (req, res, next) => {
    try {
        const response = await categoryServices.menShortsServices();
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

}

exports.menJacketController=async (req, res, next) => {
    try {
        const response = await categoryServices.menJacketServices();
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

}

exports.menPantsController=async (req, res, next) => {
    try {
        const response = await categoryServices.menPantsServices()
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

}

exports.menSuitsController=async (req, res, next) => {
    try {
        const response = await categoryServices.menSuitsServices()
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

}

exports.womenEarringsProduct=async (req, res, next) => {
    try {

        const response = await categoryServices.womenEarringsProductServices(req)
        res.status(200).render("pdp",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Jewelry",
            varlink:"women",
            type:"Earrings",
            variants:response.data[0].variants


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

}

exports.womenNecklacesProduct=async (req, res, next) => {
    try {
        req.params.productid
        const response = await categoryServices.womenNecklacesProductServices(req)
        res.status(200).render("pdp",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Jewelry",
            varlink:"women",
            type:"Necklaces",
            variants:response.data[0].variants


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

}

exports.womenScarvesProduct=async (req, res, next) => {
    try {
        req.params.productid
        const response = await categoryServices.womenScarvesProductServices(req)
        res.status(200).render("pdp",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Accessories",
            varlink:"women",
            type:"Scarves",
            variants:response.data[0].variants


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

}

exports.womenShoesProduct=async (req, res, next) => {
    try {
        req.params.productid
        const response = await categoryServices.womenShoesProductServices(req)
        res.status(200).render("pdp",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Accessories",
            varlink:"women",
            type:"Shoes",
            variants:response.data[0].variants


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

}

exports.womenDressesProduct=async (req, res, next) => {
    try {
        req.params.productid
        const response = await categoryServices.womenDressesProductServices(req)
        res.status(200).render("pdp",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Dresses",
            variants:response.data[0].variants


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

}

exports.womenJacketProduct=async (req, res, next) => {
    try {
        req.params.productid
        const response = await categoryServices.womenJacketProductServices(req)
        res.status(200).render("pdp",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Jackets & Coats",
            variants:response.data[0].variants


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

}

exports.womenBottomsProduct=async (req, res, next) => {
    try {
        req.params.productid
        const response = await categoryServices.womenBottomsProductServices(req)
        res.status(200).render("pdp",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Bottoms",
            variants:response.data[0].variants


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

}

exports.womenTopsProduct=async (req, res, next) => {
    try {
        req.params.productid
        const response = await categoryServices.womenTopsProductServices(req)
        res.status(200).render("pdp",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Tops",
            variants:response.data[0].variants
        })
    } catch (err) {
        res.status(500).json({message: err});
    }

}

exports.menLuggagesProduct=async (req, res, next) => {
    try {
        req.params.productid
        const response = await categoryServices.menLuggagesProductServices(req)
        res.status(200).render("pdp",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Accessories",
            varlink:"men",
            type:"Luggages",
            variants:response.data[0].variants


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

}

exports.menGlovesProduct=async (req, res, next) => {
    try {
        req.params.productid
        const response = await categoryServices.menGlovesProductServices(req)
        res.status(200).render("pdp",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Accessories",
            varlink:"men",
            type:"Gloves",
            variants:response.data[0].variants


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

}

exports.menTiesProduct=async (req, res, next) => {
    try {
        req.params.productid
        const response = await categoryServices.menTiesProductServices(req)
        res.status(200).render("pdp",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Accessories",
            varlink:"men",
            type:"Ties",
            variants:response.data[0].variants


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

}

exports.menDressProduct=async (req, res, next) => {
    try {
        req.params.productid
        const response = await categoryServices.menDressProductServices(req)
        res.status(200).render("pdp",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            type:"Dress Shirts",
            variants:response.data[0].variants


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

}

exports.menShortProduct=async (req, res, next) => {
    try {
        req.params.productid
        const response = await categoryServices.menShortsProductServices(req)
        res.status(200).render("pdp",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            type:"Shorts",
            variants:response.data[0].variants


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

}

exports.menJacketProduct=async (req, res, next) => {
    try {
        req.params.productid
        const response = await categoryServices.menJacketProductServices(req)
        res.status(200).render("pdp",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            type:"Jackets & Coats",
            variants:response.data[0].variants


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

}


exports.menPantsProduct=async (req, res, next) => {
    try {
        req.params.productid
        const response = await categoryServices.menPantsProductServices(req)
        res.status(200).render("pdp",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            type:"Pants",
            variants:response.data[0].variants


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

}

exports.menSuitsProduct=async (req, res, next) => {
    try {
        req.params.productid
        const response = await categoryServices.menSuitsProductServices(req)
        res.status(200).render("pdp",{
            _:_,
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            type:"Suits",
            variants:response.data[0].variants


        })
    } catch (err) {
        res.status(500).json({message: err});
    }

}
