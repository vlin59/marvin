
var mongoose = require("mongoose");


var eventItemSchema = new mongoose.Schema({
   name: String,
   category: String
});


module.exports = mongoose.model("EventItem", eventItemSchema);