const userController=require("../controllers/userController")
const authServices = require("../services/authServices");

describe('Cart Functions',()=> {
    test('Is get Cart Controller works properly with correct user id and token but empty cart(Status code should be: 400)?', async () => {

        const req = {
            session: {
                userid: "",
                userName: "",
                email: "",
                token: ""
            },
            body: {
                email: "deas@gmail.com",
                user_password: "demberker",
                user_name: "dkan"

            },
        } //Cart of this account is empty
        const res = {status:  jest.fn().mockReturnThis(), send: jest.fn()};
        let tempRes=res
        const next = jest.fn()
        await authServices.postSignInServices(req, res, next);
        await userController.getcartController(req,tempRes,next)

        expect(res.status).toBeCalledWith(400)
    })

    test('Is get Cart Controller works properly with correct user id and token but not empty cart(Status code should be: 200)?', async () => {

        const req = {
            session: {
                userid: "",
                userName: "",
                email: "",
                token: ""
            },
            body: {
                email: "berker99@gmail.com",
                user_password: "demberker",
                user_name: "berkerok12"

            },
        } //Cart of this account is not empty
        const res = {status:  jest.fn().mockReturnThis(), send: jest.fn()};
        let tempRes=res
        const next = jest.fn()
        await authServices.postSignInServices(req, res, next);
        await userController.getcartController(req,tempRes,next)

        expect(tempRes.status).toBeCalledWith(200)
    })

    test('Is get Cart Controller works properly with missing  user id and token ?', async () => {

        const req = {
            session: {
                userid: "",
                userName: "",
                email: "",
                token: ""
            },
            body: {
                email: "berker99@gmail.com",
                user_password: "demberker",
                user_name: "berkerok12"

            },
        } //Cart of this account is not empty
        const res = {status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await userController.getcartController(req,res,next)

        expect(res.status).toBeCalledWith(302)
    })

    test('Is add item to Cart API work properly ?', async () => {
        const req = {
            session: {
                userid: "",
                userName: "",
                email: "",
                token: "",
            },
            body: {
                email: "emptytest@gmail.com",
                user_password: "demberker",
                user_name: "emptytest",
                productID:"25593485",
                variantID:"701644078850"

            }
        } //Cart of this account is empty
        const res = {status:  jest.fn().mockReturnThis(), send: jest.fn()};
        let addCartRes=res
        const next = jest.fn()

        await authServices.postSignInServices(req, res, next);
        await userController.postCartController(req,addCartRes,next)
        expect(addCartRes.status).toBeCalledWith(302)
    })

    test('Is change quantity function works properly?',async ()=>{
        const req = {
            session: {
                userid: "",
                userName: "",
                email: "",
                token: "",
            },
            body: {
                email: "emptytest@gmail.com",
                user_password: "demberker",
                user_name: "emptytest",
                productID:"25593485",
                variantID:"701644078850"

            },
            params:{
                productid:"25593485",
                variantid:"701644078850",
                quantity:"4"
            }
        }
        const res = {status:  jest.fn().mockReturnThis(), send: jest.fn()};
        let chngCartRes=res
        const next = jest.fn()

        await authServices.postSignInServices(req, res, next);
        await userController.changeQuantityController(req,chngCartRes,next)
        expect(chngCartRes.status).toBeCalledWith(200)

    })

    test('IS remove item from the cart api works properly?',async ()=>{

        const req = {
            session: {
                userid: "",
                userName: "",
                email: "",
                token: ""
            },
            body: {
                email: "emptytest@gmail.com",
                user_password: "demberker",
                user_name: "emptytest",
                productID:"25593485",
                variantID:"701644078850"

            },

            params:{
                productid:"25593485",
                variantid:"701644078850"
            }
        }

        const res = {status: jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()

        await authServices.postSignInServices(req);
        await userController.removeCartItem(req,res,next)

        expect(res.status).toBeCalledWith(302)

    })
})


describe('Wishlist Functions',()=> {
    test('Is get Wishlist Controller works properly with correct user id and token but empty cart(Status code should be: 400)?', async () => {

        const req = {
            session: {
                userid: "",
                userName: "",
                email: "",
                token: ""
            },
            body: {
                email: "deas@gmail.com",
                user_password: "demberker",
                user_name: "dkan"

            },
        } //Cart of this account is empty
        const res = {status:  jest.fn().mockReturnThis(), send: jest.fn()};
        let tempRes=res
        const next = jest.fn()
        await authServices.postSignInServices(req, res, next);
        await userController.getWishlistController(req,tempRes,next)

        expect(res.status).toBeCalledWith(400)
    })

    test('Is get wishlist Controller works properly with correct user id and token but not empty cart(Status code should be: 200)?', async () => {

        const req = {
            session: {
                userid: "",
                userName: "",
                email: "",
                token: ""
            },
            body: {
                email: "berker99@gmail.com",
                user_password: "demberker",
                user_name: "berkerok12"

            },
        } //Cart of this account is not empty
        const res = {status:  jest.fn().mockReturnThis(), send: jest.fn()};
        let tempRes=res
        const next = jest.fn()
        await authServices.postSignInServices(req, res, next);
        await userController.getWishlistController(req,tempRes,next)

        expect(tempRes.status).toBeCalledWith(200)
    })

    test('Is get wishlist Controller works properly with missing  user id and token ?', async () => {

        const req = {
            session: {
                userid: "",
                userName: "",
                email: "",
                token: ""
            },
            body: {
                email: "berker99@gmail.com",
                user_password: "demberker",
                user_name: "berkerok12"

            },
        } //Cart of this account is not empty
        const res = {status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await userController.getWishlistController(req,res,next)

        expect(res.status).toBeCalledWith(302)
    })

    test('Is add item to wishlist API work properly ?', async () => {
        const req = {
            session: {
                userid: "",
                userName: "",
                email: "",
                token: "",
            },
            body: {
                email: "emptytest@gmail.com",
                user_password: "demberker",
                user_name: "emptytest",
                WLproductID:"25593485",
                WLvariantID:"701644078850"

            }
        } //Cart of this account is empty
        const res = {status:  jest.fn().mockReturnThis(), send: jest.fn()};
        let addWishlistRes=res
        const next = jest.fn()

        await authServices.postSignInServices(req, res, next);
        await userController.postWishlistController(req,addWishlistRes,next)
        expect(addWishlistRes.status).toBeCalledWith(302)
    })

    test('Is change quantity function works properly (WL)?',async ()=>{
        const req = {
            session: {
                userid: "",
                userName: "",
                email: "",
                token: "",
            },
            body: {
                email: "emptytest@gmail.com",
                user_password: "demberker",
                user_name: "emptytest",
                WLproductID:"25593485",
                WLvariantID:"701644078850"

            },
            params:{
                productid:"25593485",
                variantid:"701644078850",
                quantity:"4"
            }
        }
        const res = {status:  jest.fn().mockReturnThis(), send: jest.fn()};
        let chngCartRes=res
        const next = jest.fn()

        await authServices.postSignInServices(req, res, next);
        await userController.changeWLQuantityController(req,chngCartRes,next)
        expect(chngCartRes.status).toBeCalledWith(200)

    })

    test('IS remove item from wishlist api works properly?',async ()=>{

        const req = {
            session: {
                userid: "",
                userName: "",
                email: "",
                token: ""
            },
            body: {
                email: "emptytest@gmail.com",
                user_password: "demberker",
                user_name: "emptytest",
                WLproductID:"25593485",
                WLvariantID:"701644078850"

            },

            params:{
                productid:"25593485",
                variantid:"701644078850"
            }
        }

        const res = {status: jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()

        await authServices.postSignInServices(req);
        await userController.removeWishlistItem(req,res,next)

        expect(res.status).toBeCalledWith(302)

    })


})


