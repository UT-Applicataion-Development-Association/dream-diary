class DreamDiaryCustomError extends Error {
    constructor(message, options) {
        super(message, options)
        this.name = this.constructor.name
    }
}
/**
 * A serious problem that should not try to catch.
 */
class ServerError extends DreamDiaryCustomError {}
class GatewayError extends ServerError {}
class DatabaseError extends ServerError {}

/**
 * A condition that might want to catch.
 */
class ServerException extends DreamDiaryCustomError {}

/****  Authentication Errors  ****/
class AuthenticationException extends ServerException {}
class UnauthorizedException extends AuthenticationException {}
class TokenExpiredException extends AuthenticationException {}
class NoPermissionException extends AuthenticationException {}

/****  Resource Errors  ****/
class RequirementUnfulfilledException extends ServerException {}
class UniquenessViolatedException extends ServerException {}
class InvalidValueException extends ServerException {}
class ResourceNotFoundException extends ServerException {}

module.exports = {
    ServerError,
    DatabaseError,
    GatewayError,

    AuthenticationException,
    UnauthorizedException,
    NoPermissionException,
    TokenExpiredException,

    RequirementUnfulfilledException,
    UniquenessViolatedException,
    InvalidValueException,
    ResourceNotFoundException,
}
