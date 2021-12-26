const { Response, response } = require("../utils/response")

const { mongoose } = require('../db/mongoose')

module.exports.mongoChecker = (req, res, next) => {
    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        console.log('Issue with mongoose connection')
        res.status(500).send(response.INTERNAL_SERVER_ERROR)
        return;
    } else {
        next()
    }
}