const mongoose = require('mongoose')
const {
    UniquenessViolatedException,
    RequirementUnfulfilledException,
    InvalidValueException,
    ResourceNotFoundException,
    InvalidIdException,
} = require('../../models/Error')

const UserServices = require('../../services/user')
const { Response, response } = require('../../utils/response')

class UserController {
    registerUser = async (req, res, next) => {
        const { name, password, email } = req.body

        try {
            if (!(name && password && email)) {
                throw new RequirementUnfulfilledException()
            }

            // TODO: Add validation for email&password format
            const userServices = new UserServices()

            const user = await userServices.createUser({
                name,
                password,
                email,
            })

            res.status(201).send(
                new Response({
                    entity: { user },
                })
            )
        } catch (err) {
            // TODO:
            // If MongoError
            // If unique email is violated
            if (err.message === 'User already exists') {
                next(new UniquenessViolatedException('User already exists'))
            } else if (err instanceof mongoose.Error.ValidationError) {
                next(new InvalidValueException('Invalid inputs'))
            } else {
                next(err)
            }
        }
    }

    authenticateUser = async (req, res, next) => {
        try {
            const { email, password } = req.body
            const userServices = new UserServices()

            const user = await userServices.getUserByEmailWithPassword(email)
            if (user && (await user.matchPassword(password))) {
                res.send(
                    new Response({
                        entity: {
                            user,
                            token: userServices.generateToken(
                                user._id,
                                user.email,
                                user.isAdmin
                            ),
                        },
                    })
                )
            } else {
                // User not found or password doesn't match
                throw new ResourceNotFoundException('Invalid credentials')
            }
        } catch (err) {
            next(err)
        }
    }

    updateUser = async (req, res, next) => {
        try {
            const userServices = new UserServices()
            const email = req.email

            const { _id, name } = req.body
            const updateBody = { _id, name }

            if (!mongoose.isValidObjectId(_id)) {
                throw new InvalidIdException()
            }

            const updatedUser = await userServices.updateUser(_id, updateBody)
            if (updatedUser) {
                res.send(
                    new Response({
                        entity: {
                            user: updatedUser,
                        },
                    })
                )
            } else {
                throw new ResourceNotFoundException()
            }
        } catch (err) {
            next(err)
        }
    }

    getUser = async (req, res, next) => {
        // TODO:
    }

    deleteUser = async (req, res, next) => {
        // TODO:
    }
}

module.exports = UserController
