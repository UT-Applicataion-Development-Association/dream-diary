const jwt = require('jsonwebtoken')
const { response } = require('../utils/response')
const config = require('../../configs')

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1]
    if (!token) {
        console.log('No token found, not authorized')
        res.status(401).send(response.UNAUTHORIZED)
        return
    }
    try {
        const decodedInfo = jwt.verify(token, config.secretKey)
        req.email = decodedInfo.email
        req.userId = decodedInfo.userId

        console.log('authenticated')
        next()
    } catch (error) {
        res.status(401).send(response.UNAUTHORIZED + error.message)
    }
}

module.exports = { authenticateToken }
