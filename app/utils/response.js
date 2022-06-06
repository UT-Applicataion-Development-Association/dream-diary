const { ReasonPhrases, StatusCodes } = require('http-status-codes')

class Response {
    constructor({ msg = 'OK', entity = null, status = 200 } = {}) {
        this.msg = msg
        this.status = status
        this.entity = entity
        this.timestamp = new Date()
    }
}

const response = {
    OK: new Response({
        msg: ReasonPhrases.OK,
        status: StatusCodes.OK,
        entity: null,
    }),
    NOT_SATISFIED: new Response({
        msg: 'Service Requirements Not Satisfied',
        status: 400,
        entity: null,
    }),

    UNAUTHORIZED: new Response({
        msg: ReasonPhrases.UNAUTHORIZED,
        status: StatusCodes.UNAUTHORIZED,
        entity: null,
    }),
    FORBIDDEN: new Response({
        msg: ReasonPhrases.FORBIDDEN,
        status: StatusCodes.FORBIDDEN,
        entity: null,
    }),
    NOT_FOUND: new Response({
        msg: ReasonPhrases.NOT_FOUND,
        status: StatusCodes.NOT_FOUND,
        entity: null,
    }),

    TIMEOUT: new Response({
        msg: ReasonPhrases.REQUEST_TIMEOUT,
        status: StatusCodes.REQUEST_TIMEOUT,
        entity: null,
    }),
    SERVICE_UNAVAILABLE: new Response({
        msg: ReasonPhrases.SERVICE_UNAVAILABLE,
        status: StatusCodes.SERVICE_UNAVAILABLE,
        entity: null,
    }),

    INTERNAL_SERVER_ERROR: new Response({
        msg: ReasonPhrases.INTERNAL_SERVER_ERROR,
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        entity: null,
    }),
}

module.exports = {
    Response,
    response,
}
