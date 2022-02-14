const jwt = require('jsonwebtoken')
const config = require("../../configs");

const generateToken = (id,email) => {
    return jwt.sign({userId:id,email:email},config.jwtSecret,{
        expiresIn:"30d",
    });
};

module.exports = {generateToken};