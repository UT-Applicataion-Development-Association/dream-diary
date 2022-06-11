const jwt = require('jsonwebtoken')
const { response } = require('../utils/response')
const config = require('../../configs')

/**
 * Verify request has valid token.
 * Assign { email, userId } to req.
 */
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1]
    if (!token) {
        console.log('Unauthorized request without token')
        res.status(401).send(response.UNAUTHORIZED)
        return
    }
    try {
        const decodedInfo = jwt.verify(token, config.secretKey)
        req.email = decodedInfo.email
        req.user = {
            _id: decodedInfo.userId,
            email: decodedInfo.email,
            isAdmin: decodedInfo.isAdmin,
        }
        next()
    } catch (error) {
        res.status(401).send(response.UNAUTHORIZED + error.message)
    }
}

module.exports = { authenticateToken }
