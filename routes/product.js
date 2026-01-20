const express = require('express');
const Product = require('../models/product.model');
const { default: mongoose } = require('mongoose');

const router = express.Router();


router.get('/', async(req, res)=>{

    const products = await Product.find();
    res.send(products);
});

router.get('/:id', async(req, res)=>{

    const productId = req.params.id;

    const isValidId = mongoose.Types.ObjectId.isValid(productId); // validate id
    if(!isValidId) return res.status(404).send({mesagge: 'product does not exist.'})
    
    const product = await Product.findById(req.params.id);
    res.send(product);
});


module.exports = router;

