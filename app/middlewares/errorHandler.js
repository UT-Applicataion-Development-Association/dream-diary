const { ReasonPhrases, StatusCodes } = require('http-status-codes')
const { Response, response, error2Response } = require('../utils/response')

const errorHandler = (err, req, res, next) => {
    console.error(`🤖 Handler received error: ${err}`)

    const { message: errMessage, name: errName } = err
    const errResponse = new Response({ entity: { error: err } })

    if (errName in error2Response) {
        errResponse.status = error2Response[errName].status
        errResponse.msg = errMessage || error2Response[errName].msg
    } else {
        // Uncaught error
        errResponse.status = StatusCodes.INTERNAL_SERVER_ERROR
        errResponse.msg = errMessage || ReasonPhrases.INTERNAL_SERVER_ERROR
    }

    res.status(errResponse.status).send(errResponse)
}

module.exports = { errorHandler }
