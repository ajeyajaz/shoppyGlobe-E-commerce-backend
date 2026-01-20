const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {type: String, required: true, maxLength: 255},
    price: {type: Number, required: true, min:1},
    description: {type: String, required: true, maxLength: 255},
    stock: {type: Number, default:0, min: 0}
});

const Product = mongoose.model('Product', productSchema);


module.exports = Product;