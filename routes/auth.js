const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const {User} = require('../models/user');

const router = express.Router();


router.post('/', async(req, res)=>{

    const {error} = validateUser(req.body); // validation
    if(error) return res.status(400).send({message: error.details[0].message});

    let user = await User.findOne({email: req.body.email});
    if(!user) return res.status(404).send({message: 'invalid email or password.'});

    const isValidPassword = await bcrypt.compare(req.body.password, user.password); //decrypt
    if(!isValidPassword) return res.status(404).send({message: 'invalid email or password.'});

    const token = jwt.sign({_id: user._id}, 'myPrivateKey', {expiresIn: "1h"});

    res.send({token});
});


function validateUser(value){

    //schema based validation
    const schema = joi.object({
        email: joi.string().required().max(255).email(),
        password: joi.string().required().min(8).max(50)
    });

    return {error, value} = schema.validate(value);
}


module.exports = router;