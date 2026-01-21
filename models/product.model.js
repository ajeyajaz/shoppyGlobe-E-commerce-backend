const mongoose = require('mongoose');
const joi = require('joi');


const productSchema = new mongoose.Schema({
    name: {type: String, required: true, maxLength: 255},
    price: {type: Number, required: true, min:1},
    description: {type: String, required: true, maxLength: 255},
    stock: {type: Number, default:0, min: 0}
});

const Product = mongoose.model('Product', productSchema);


function validateProduct(value={}){

    const schema = joi.object({
        productId: joi.objectId(),
        name: joi.string().max(255).required(),
        price: joi.number().min(1).required(),
        description: joi.string().max(255).required(),
        stock: joi.number().min(0).required(),
    })

    return {error, value} = schema.validate(value);
}


exports.Product = Product;
exports.validate = validateProduct;