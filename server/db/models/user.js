var mongoose = require("mongoose");
var EventItem = require("./eventItems");



var userSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    eventItems:{
        type:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "EventItem"
        }]

    }

});


module.exports = mongoose.model("User", userSchema);