var mongoose = require("mongoose");
var EventItem = require("./eventItem");



var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    eventItems:{
        type:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "EventItem"
        }]

    }

});


module.exports = mongoose.model("User", userSchema);