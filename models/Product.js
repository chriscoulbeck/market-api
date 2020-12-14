const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    price:{type: String, required: true},
    username: {type: String, required: true},
    desc: {type: String, required: true},

});


module.exports = mongoose.model("Product", ProductsSchema)
