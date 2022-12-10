
const jwt = require('jsonwebtoken');
const secret_key = "Esta es mi llave secreta";

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, secret_key, (err, payload) => {
        if(err) {
            res.status(401).json({message: "You're not allowed to be in this site!"})
        } else {
            next();
        }
    })
}