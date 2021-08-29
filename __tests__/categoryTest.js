const categoryController=require('../controllers/categoryController')
const authServices = require("../services/authServices");

describe('Do Category APIs work properly',()=>{
    test('Do men category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.menController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do women category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.womenCategoryController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do women clothing category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.womenClothingController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do women jewelry category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.womenJewelryController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do women accessories category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.womenAccessoriesController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do men clothing category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.menClothingController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do men accessories category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.menAccessoriesController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do women earrings category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.womenEarringsController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do women necklaces category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.womenNecklacesController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do women scarves category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.womenScarvesController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do women shoes category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.womenShoesController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do women dresses category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.womenDressesController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do women jackets category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.womenJacketController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do women bottoms category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.womenBottomsController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do women tops category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.womenTopsController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do men luggages category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.menLuggagesController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do men gloves category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.menGlovesController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do men ties category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.menTiesController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do men dress category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.menDressController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do men shorts category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.menShortController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do men jacket category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.menJacketController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do men pants category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.menPantsController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do men suits category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.menSuitsController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do men shorts category API work properly?',async ()=>{
        const req={}
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.menShortController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do women earrings product API work properly?',async ()=>{
        const req={
            params:{
                productid:"25720027",
            }
        }
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.womenEarringsProduct(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do women necklaces product API work properly?',async ()=>{
        const req={
            params:{
                productid:"25720078",
            }
        }
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.womenNecklacesController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do women scarves product API work properly?',async ()=>{
        const req={
            params:{
                productid:"25594776",
            }
        }
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.womenScarvesController(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do women shoes product API work properly?',async ()=>{
        const req={
            params:{
                productid:"25772707",
            }
        }
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.womenShoesProduct(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do women dresses product API work properly?',async ()=>{
        const req={
            params:{
                productid:"25503603",
            }
        }
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.womenDressesProduct(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do women jackets product API work properly?',async ()=>{
        const req={
            params:{
                productid:"25589048",
            }
        }
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.womenJacketProduct(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do women bottoms product API work properly?',async ()=>{
        const req={
            params:{
                productid:"25564782",
            }
        }
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.womenBottomsProduct(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do women tops product API work properly?',async ()=>{
        const req={
            params:{
                productid:"25484265",
            }
        }
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.womenTopsProduct(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do men luggages product API work properly?',async ()=>{
        const req={
            params:{
                productid:"M1355",
            }
        }
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.menLuggagesProduct(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do men gloves product API work properly?',async ()=>{
        const req={
            params:{
                productid:"TG250",
            }
        }
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.menGlovesProduct(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do men ties product API work properly?',async ()=>{
        const req={
            params:{
                productid:"25752235",
            }
        }
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.menTiesProduct(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do men dress product API work properly?',async ()=>{
        const req={
            params:{
                productid:"74974310",
            }
        }
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.menDressProduct(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do men shorts product API work properly?',async ()=>{
        const req={
            params:{
                productid:"54736828",
            }
        }
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.menShortProduct(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do men jackets product API work properly?',async ()=>{
        const req={
            params:{
                productid:"34736758",
            }
        }
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.menJacketProduct(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do men pants product API work properly?',async ()=>{
        const req={
            params:{
                productid:"91736743",
            }
        }
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.menPantsProduct(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })

    test('Do men suits product API work properly?',async ()=>{
        const req={
            params:{
                productid:"25686364",
            }
        }
        const res={status:  jest.fn().mockReturnThis(), send: jest.fn()};
        const next = jest.fn()
        await categoryController.menSuitsProduct(req,res,next)
        expect(res.status).toBeCalledWith(200)
    })
})
