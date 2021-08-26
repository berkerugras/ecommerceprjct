const express = require('express');
const router = express.Router();
require('dotenv').config();
const categoryController=require('../controllers/categoryController')



router.get('/',async function (req, res, next) {
    try {
        await res.redirect("/categories/women")
    }catch (err){
        res.status(500).json({message: err});
    }
})

router.get('/men',categoryController.menController)

router.get('/women',categoryController.womenCategoryController)

router.get('/women/clothing',categoryController.womenClothingController)

router.get('/women/jewelry',categoryController.womenJewelryController)

router.get('/women/accessories',categoryController.womenAccessoriesController)

router.get('/men/clothing',categoryController.menClothingController)

router.get('/men/accessories',categoryController.menAccessoriesController)

router.get('/women/jewelry/earrings',categoryController.womenEarringsController)

router.get('/women/jewelry/necklaces',categoryController.womenNecklacesController)

router.get('/women/accessories/scarves',categoryController.womenScarvesController)

router.get('/women/accessories/shoes',categoryController.womenShoesController)

router.get('/women/clothing/dresses',categoryController.womenDressesController)

router.get('/women/clothing/jackets(%20&%20coats)?',categoryController.womenJacketController)

router.get('/women/clothing/bottom(s)?',categoryController.womenBottomsController)

router.get('/women/clothing/top(s)?',categoryController.womenTopsController)

router.get('/men/accessories/luggage(s)?',categoryController.menLuggagesController)

router.get('/men/accessories/glove(s)?',categoryController.menGlovesController)

router.get('/men/accessories/tie(s)?',categoryController.menTiesController)

router.get('/men/clothing/dress(%20shirts)?',categoryController.menDressController)

router.get('/men/clothing/short(s)?',categoryController.menShortController)

router.get('/men/clothing/jackets(%20&%20coats)?',categoryController.menJacketController)

router.get('/men/clothing/pant(s)?',categoryController.menPantsController)

router.get('/men/clothing/suit(s)?',categoryController.menSuitsController)

router.get('/women/jewelry/earrings/:productid',categoryController.womenEarringsProduct)

router.get('/women/jewelry/necklaces/:productid',categoryController.womenNecklacesProduct)

router.get('/women/accessories/scarves/:productid',categoryController.womenScarvesProduct)

router.get('/women/accessories/shoes/:productid',categoryController.womenShoesProduct)

router.get('/women/clothing/dresses/:productid',categoryController.womenDressesProduct)

router.get('/women/clothing/jackets(%20&%20coats)?/:productid',categoryController.womenJacketProduct)

router.get('/women/clothing/bottoms/:productid',categoryController.womenBottomsProduct)

router.get('/women/clothing/tops/:productid',categoryController.womenTopsProduct)

router.get('/men/accessories/luggage(s)?/:productid',categoryController.menLuggagesProduct)

router.get('/men/accessories/glove(s)?/:productid',categoryController.menGlovesProduct)

router.get('/men/accessories/tie(s)?/:productid',categoryController.menTiesProduct)

router.get('/men/clothing/dress(%20shirts)?/:productid',categoryController.menDressProduct)

router.get('/men/clothing/short(s)?/:productid',categoryController.menShortProduct)

router.get('/men/clothing/jackets(%20&%20coats)?/:productid',categoryController.menJacketProduct)

router.get('/men/clothing/pant(s)?/:productid',categoryController.menPantsProduct)

router.get('/men/clothing/suit(s)?/:productid',categoryController.menSuitsProduct)



module.exports = router;
