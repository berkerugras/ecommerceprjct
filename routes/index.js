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
})




module.exports = router;
