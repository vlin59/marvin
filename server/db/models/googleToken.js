var mongoose = require("mongoose");

var googleToken = new mongoose.Schema({
    token: mongoose.Schema.Types.Mixed
});


module.exports = mongoose.model("GoogleToken", googleToken);