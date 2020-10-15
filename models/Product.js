const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    price:{type: String, required: true},
    username: {type: String, required: true},
<<<<<<< HEAD
=======
    details:{type: String, required: true},
>>>>>>> 528c1b24b410d682eb49dabeafb342952fc42c18
    description: {type: String, required: true},

});


module.exports = mongoose.model("Product", ProductsSchema)
