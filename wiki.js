var express = require('express');
var router = express.Router();

// Express ROUTER: https://expressjs.com/en/4x/api.html#router
/*
router.get('/', function(req, res){
    res.send('Wiki home page');
});
*/
router.get('/about', function(req, res){
    res.send('About this wiki');
});


router.get("/", (req, res) => {
    res.render("homepage");
});


module.exports = router;