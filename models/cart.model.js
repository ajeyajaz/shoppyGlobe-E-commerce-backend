const mongoose = require('mongoose');
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)


const cartItemSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },

    name: String,
    price: Number,
    quantity: {type: Number, required: true, min: 1}

}, {_id: false});


const cartSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true},
    items: [cartItemSchema]
});

const Cart = mongoose.model('Cart', cartSchema);


function validateCart(value){

    const schema = Joi.object({
        productId: Joi.objectId(),
        quantity: Joi.number().min(1).max(10)
    });

    return {error, value} = schema.validate(value);
};


exports.Cart = Cart;
exports.validate = validateCart;
