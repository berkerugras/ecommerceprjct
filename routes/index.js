const express = require('express');
const router = express.Router();
require('dotenv').config();
const userController=require("../controllers/userController")

router.get('/',async function (req, res, next) {
    try{
    res.status(200).render("mainPage", {
        title: "Alibazon",
    })
} catch (err) {
    err.status=500
    return next(err)
}
});

router.get('/profile',userController.profileController);

router.get('/logout',userController.logoutController);


router.get('/cart',userController.getcartController)

router.post('/cart',userController.postCartController)

router.get('/cart/:productid',userController.getCartProduct)

router.get('/cart/remove/:productid/:variantid',userController.removeCartItem )

router.get('/cart/changeItemQuantity/:productid/:variantid/:quantity',userController.changeQuantityController)

//WISHLIST
router.get('/wishlist',userController.getWishlistController)

router.post('/wishlist',userController.postWishlistController)

router.get('/wishlist/:productid',userController.getWishlistProduct)

router.get('/wishlist/remove/:productid/:variantid',userController.removeWishlistItem )

router.get('/wishlist/changeItemQuantity/:productid/:variantid/:quantity',userController.changeWLQuantityController)
module.exports = router;
