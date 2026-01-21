const express = require('express');
const {User, validate} = require('../models/user.model');
const bcrypt = require('bcrypt');

const router = express.Router();


router.post('/', async(req, res)=>{

    const {error} = validate(req.body); // validation
    if(error) return res.status(400).send({message: error.details[0].message});

    let user = await User.findOne({email: req.body.email});
    if(user) return res.status(404).send({message: 'email registered already.'});

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10) // hashing
    });

    await user.save();

    res.status(201).send({
        _id: user._id,
        name: user.name,
        email: user.email
    });
});


module.exports = router;