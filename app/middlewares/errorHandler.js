const {
    ServerError,
    DatabaseError,
    GatewayError,

    AuthenticationException,
    NotAuthenticatedException,
    NoPermissionException,
    TokenExpiredException,

    RequirementUnfulfilledException,
    UniquenessViolatedException,
    InvalidValueException,
    ResourceNotFoundException,
} = require('../models/Error')

const { Response, response } = require('../utils/response')

const handleError = (err, req, res, next) => {
    try {
        next()
    } catch (err) {
        console.error(err)
        // Resource errors
        if (err instanceof ResourceNotFoundException) {
            res.status(404).send(response.NOT_FOUND)
        } else if (err instanceof RequirementUnfulfilledException) {
            res.status(400).send(response.NOT_SATISFIED)
        }
        // Authentication errors
        else if (err instanceof NotAuthenticatedException) {
            res.status(401).send(response.UNAUTHORIZED)
        } else if (err instanceof NoPermissionException) {
            res.status(403).send(response.FORBIDDEN)
        } else {
            res.status(500).send(
                new Response({ msg: err.message, status: 500 })
            )
        }
    }
}

module.exports = { handleError }
