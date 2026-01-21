const jwt = require('jsonwebtoken');

//reads x-auth-token from request's header and sets userObject in the header

function auth(req, res, next){

    const token = req.get('x-auth-token');
    if(!token) res.status(401).send({message: 'not authorized'})
   
    jwt.verify(token, 'myPrivateKey', function(err, decoded) {
        if(err) return res.status(401).send({message: 'invalid token'});

        req.user = decoded; // set userObject
        next();
    });
};


module.exports = auth;


