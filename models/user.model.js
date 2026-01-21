const mongoose = require('mongoose');
const joi = require('joi');

// user
const userSchema = new mongoose.Schema({
    name:{type: String, required: true, maxLength: 255},
    email:{type: String, required: true, maxLength: 255, unique: true},
    password:{type: String, required: true, maxLength: 1024, minLength:8} // hashed password
});

const User = mongoose.model('User', userSchema);

// return  errors if validation fails or undifined
function validateUser(value = {}){

    //schema based validation
    const schema = joi.object({
        name: joi.string().required().max(255),
        email: joi.string().required().max(255).email(),
        password: joi.string().required().min(8).max(50)
    });

    return {error} = schema.validate(value);
}

exports.User = User;
exports.validate = validateUser;