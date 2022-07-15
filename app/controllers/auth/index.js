const mongoose = require('mongoose')

const UserServices = require('../../services/user')
const { Response, response } = require('../../utils/response')

class UserController {
    registerUser = async (req, res) => {
        const { name, password, email } = req.body

        if (!(name && password && email)) {
            res.status(400).send(response.NOT_SATISFIED)
            return
        }

        // TODO: Add validation for email&password format
        const userServices = new UserServices()

        try {
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
                res.status(400).send(
                    new Response({ msg: err.message, status: 400 })
                )
            } else if (err instanceof mongoose.Error.ValidationError) {
                res.status(400).send(
                    new Response({ msg: 'Invalid inputs', status: 400 })
                )
            } else {
                // Else
                console.error(err)
                res.status(500).send(
                    new Response({ msg: err.message, status: 500 })
                )
            }
        }
    }

    authenticateUser = async (req, res) => {
        try {
            const { email, password } = req.body
            const userServices = new UserServices()

            const user = await userServices.getUserByEmail(email)
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
                res.status(404).send(response.NOT_FOUND)
            }
        } catch (err) {
            console.error(err)
            res.status(500).send(
                new Response({ msg: err.message, status: 500 })
            )
        }
    }

    updateUser = async (req, res) => {
        try {
            const userServices = new UserServices()
            const email = req.email

            const { _id, name } = req.body
            const updateBody = { _id, name }

            if (!mongoose.isValidObjectId(_id)) {
                res.status(400).send(
                    new Response({ status: 400, msg: 'Invalid _id' })
                )
                return
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
                res.status(404).send(response.NOT_FOUND)
            }
        } catch (err) {
            console.error(err)
            // TODO:
            // If MongoError
            // If user not found
            // Else
            res.status(500).send(
                new Response({ msg: err.message, status: 500 })
            )
        }
    }

    getUser = async (req, res) => {
        // TODO:
    }

    deleteUser = async (req, res) => {
        // TODO:
    }
}

module.exports = UserController
