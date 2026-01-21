const {Cart, validate} = require('../models/cart.model');
const  Product  = require('../models/product.model');
const express = require('express');

const router = express.Router();


router.post('/', async(req, res) => {

    const userId = req.user._id;
    
    const {error} = validate(req.body);
    if(error) return res.status(400).send({message: error.details[0].message});
    
    let cart = await Cart.findOne({user: userId});

    const product = await Product.findById(req.body.productId);
    if(!product) return res.status(400).send({message: 'product not found.'});

    if(!cart) cart = new Cart({user: userId, items: []}); // create a cart

    let item = cart.items.find(i => i._id.toString() === req.body.productId);
    if(item) return res.status(400).send({message: 'product added already.'});
    
    item = {
        _id: product._id,
        name: product.name,
        price: product.price,
        quantity: req.body.quantity
    }

    cart.items.push(item);
    cart = await cart.save(); // save to DB

    res.status(200).send(cart);
});


router.put('/', async(req, res) => {

    const {error} = validate(req.body);
    if(error) return res.status(400).send({message: error.details[0].message});

    let cart = await Cart.findOne({user: req.user._id});
    if(!cart) return res.status(400).send({message: 'cart not found.'});

    const item = cart.items.find(e => e._id.toString() === req.body.productId);
    if(!item) return res.status(400).send({message: 'item not found.'});
        

    item.quantity = req.body.quantity;
    cart = await cart.save(); // save DB

    res.send(cart);
});


router.delete('/:id', async(req, res)=> {

    const cart = await Cart.findOne({user: req.user._id});
    if(!cart) return res.status(400).send({message: 'cart not found.'});
    
    const itemCount = cart.items.length;
    cart.items = cart.items.filter(i => i._id.toString() !== req.params.id); // filter products

    if(itemCount === cart.items.length) return res.status(404).send({message: 'product not found'});
    
    await cart.save();

    res.send(cart);
});


module.exports = router;