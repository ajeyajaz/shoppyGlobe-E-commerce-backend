const mongoose = require('mongoose');

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


module.exports = Cart;
