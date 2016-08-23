
var mongoose = require("mongoose");


var eventItemSchema = new mongoose.Schema({
   name: String,
   time: String,
   phone: Number,
   email: String
});


module.exports = mongoose.model("EventItem", eventItemSchema);