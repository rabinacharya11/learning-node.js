const express = require('express'); 

const router = express.Router(); 

router.post("/register", (req, res, next)=>{ 

    // find user 
    // checks if user exists 
    /// if user exists, return error 
    /// else
    /// encrypt password 
    /// save user to database 


});


router.post("/login", (req, res, next)=>{

    // login users
}); 




module.exports = router;