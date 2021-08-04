const express = require('express');
const router = express.Router();


router.get('/',function (req,res,next){
    res.render("index", {
        // Template data
        title: "Alibazon"
    });
})

module.exports = router;
