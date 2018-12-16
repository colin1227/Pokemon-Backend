const express = require("express");

router = express.Router();

router.get("/runit", (req, res)=>{
    res.render("gamePage.ejs")
})

module.exports = router;