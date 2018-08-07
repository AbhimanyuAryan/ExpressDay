var express = require('express');
var wiki = require('./wiki.js');
var form = require('./form.js');
var path = require('path');
var bodyParser = require('body-parser');
var User = require('./Models/user.js');

var app = express();

app.use(express.static('public')); // serving
app.use(express.static('media')); // serving
app.set("view engine", "pug"); // How to use PUG https://gist.github.com/joepie91/c0069ab0e0da40cc7b54b8c2203befe1

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));

// app.use(logger('dev'));

// EXPRESS ROUTING: https://expressjs.com/en/guide/routing.html#response-methods
app.get('/', function(req,res){
    res.send('Hello World');
    // Other response methods: https://expressjs.com/en/guide/routing.html#response-methods
});

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
    .then(item => {
        res.send("item saved to database");
    })
    .catch(err => {
        res.status(400).send("unable to save to database");
    });
});

var a_middleware_function = function(req, res, next) {
    console.log("A MiddleWare Function");
    next();  // MiddleWare functions by Express: http://expressjs.com/en/resources/middleware.html
}

app.use('/wikis', wiki);
app.use('/form', form);
// Function added with use() for all routes and verbs
app.use(a_middleware_function);

app.use('/someroute', a_middleware_function);


app.get('/users/:userId/books/:bookId', function (req, res) {
    // Access userId via:
    req.params.userId
    // Access bookId via:
    req.params.bookId
    res.send(req.params);
})

// Function added with use() for a specific route
app.use('/someroute', a_middleware_function);

app.listen(5000, function(){
    console.log("Example app listening on port 3000!");
});

