var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/form.html");
});


module.exports = router;