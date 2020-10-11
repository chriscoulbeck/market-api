const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
<<<<<<< HEAD
    title: {type: String},
    price:{type:String},
    date:{type:String},
    active:{type:String},
    location:{type:String},
    username: {type:String},
    userrating:{type:String},
    details:{type:String},
    description: {type: String},
    category:{type:String}
=======
    title: {type: String, required: true},
    price:{type: String, required: true},
    username: {type: String, required: true},
    details:{type: String, required: true},
    description: {type: String, required: true},
>>>>>>> upstream/master

})


module.exports = mongoose.model("Product", ProductsSchema)
