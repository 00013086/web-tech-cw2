const express = require("express");
const router = express.Router();
const md5 = require("md5");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Root path
router.get("/", async (req, res, next) => {
    // res.json({message: 'success'})
    res.render('index', {
        webAppTitle: 'Blog Posting Application',
        welcomingText: 'Welcome to our Platform',
    });
});

module.exports = router;