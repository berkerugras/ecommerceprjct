const express = require('express');
const router = express.Router();


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
    // try {
    //     const response = await axios({
    //         url: "http://osf-digital-backend-academy.herokuapp.com/api/categories/parent/womens?secretKey=$2a$08$O13PKOzfgc0KjRSX5fxP4uCN3S1SUExNGnSrLR7FDkKJN7MdkSfsm",
    //         method: "get",
    //     });
    //     res.status(200).render("index.ejs", {
    //         _: _,
    //         title: "Alibazon",
    //         items: response.data
    //     })
    // } catch (err) {
    //     res.status(500).json({message: err});
    // }
});

router.get('/profile',function (req,res,next){
    if(!req.session.userid){
        const err=new Error("You are not authorized to view this content!")
        err.status=403
        return next(err);
    }
    res.status(200).render('profile',{
        title:"Alibazon",
        category:"Profile",
        username:req.session.userName,
        email:req.session.email
    })
});

router.get('/logout',function (req,res,next){
    if(req.session){
        req.session.destroy(function (err){
            if(err){
                return next(err);
            }else{
                return res.redirect('/');
            }
        });
    }
});

router.get('/cart',function (req,res,next){

})

router.post('/cart',function (req,res,next){

})
module.exports = router;
