/**
 * A serious problem that should not try to catch.
 */
class ServerError extends Error {
    constructor(message, options) {
        super(message, options)
        this.name = this.constructor.name
    }
}

class GatewayError extends ServerError {
    constructor(message, options) {
        super(message, options)
        this.name = 'GatewayError'
    }
}

class DatabaseError extends ServerError {
    constructor(message, options) {
        super(message, options)
        this.name = 'DatabaseError'
    }
}

/**
 * A condition that might want to catch.
 */
class ServerException extends Error {
    constructor(message, options) {
        super(message, options)
        this.name = this.constructor.name
    }
}

class AuthenticationException extends ServerException {
    constructor(message, options) {
        super(message, options)
        this.name = 'AuthenticationException'
    }
}

class NotAuthenticatedException extends AuthenticationException {
    constructor(message, options) {
        super(message, options)
        this.name = 'NotAuthenticatedException'
    }
}

class TokenExpiredException extends AuthenticationException {
    constructor(message, options) {
        super(message, options)
        this.name = 'TokenExpiredException'
    }
}

class NoPermissionException extends AuthenticationException {
    constructor(message, options) {
        super(message, options)
        this.name = 'NoPermissionException'
    }
}

class RequirementUnfulfilledException extends ServerException {
    constructor(message, options) {
        super(message, options)
        this.name = 'RequirementUnfulfilledException'
    }
}

class UniquenessViolatedException extends ServerException {
    constructor(message, options) {
        super(message, options)
        this.name = 'UniquenessViolatedException'
    }
}

class InvalidValueException extends ServerException {
    constructor(message, options) {
        super(message, options)
        this.name = 'InvalidValueException'
    }
}

class ResourceNotFoundException extends ServerException {
    constructor(message, options) {
        super(message, options)
        this.name = 'ResourceNotFoundException'
    }
}

module.exports = {
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
}
