let User = require('../models/user');
let Joi = require('joi');
let bcrypt = require('bcryptjs');
let schema = Joi.object({
    name: Joi.string().min(5).max(15).required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().required()
})


let createUser = async(req, res) => {
    //validate
    try {
        await schema.validateAsync(req.body);
        res.send(await User.create({...req.body, password: await bcrypt.hash(req.body.password, 8) }));
    } catch (error) {
        res.send(error, 400);
    }
}


module.exports = {

    createUser
  
}