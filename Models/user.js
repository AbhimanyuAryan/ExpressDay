var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ExpressDay');


var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});

var User = mongoose.model("User", nameSchema);

module.exports = User;