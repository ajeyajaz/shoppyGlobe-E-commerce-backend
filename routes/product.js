const express = require('express');
const {Product, validate} = require('../models/product.model');
const { default: mongoose } = require('mongoose');

const router = express.Router();


function isValidId(id) {
    return mongoose.Types.ObjectId.isValid(id);
}


router.get('/', async(req, res)=>{

    const products = await Product.find();
    res.send(products);
});


router.get('/:id', async(req, res)=>{

    const productId = req.params.id;

    if(!isValidId(productId)) return res.status(400).send({mesagge: 'product ID not valid'})
    
    const product = await Product.findById(productId);
    if(!product) return res.status(404).send({mesagge: 'product not found'})

    res.send(product);
});


router.post('/', async(req, res)=>{

    const {error} = validate(req.body); // validation
    if(error) return res.status(400).send({message: error.details[0].message});

    const product = new Product(req.body);
    product.save();

    res.send(product);
});


router.put('/', async(req, res)=>{

    const productId = req.body?.productId || null;
    if(!productId) return res.status(400).send({mesagge: 'productId required.'});

    const {error} = validate(req.body);
    if(error) return res.status(400).send({message: error.details[0].message});

    const product = await Product.findByIdAndUpdate(productId, {
        $set: {
            name : req.body.name,
            price: req.body.price,
            description: req.body.description,
            stock: req.body.stock
        }
    }, {new:true});

    res.send(product);
});


router.delete('/:id', async(req, res)=>{

    if(!isValidId(req.params.id)) return res.status(400).send({mesagge: 'product ID not valid.'});
    
    const product = await Product.findByIdAndDelete(req.params.id);
    if(!product) return res.status(404).send({mesagge: 'product not found.'});

    res.send(product);
});


module.exports = router;

