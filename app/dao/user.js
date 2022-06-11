const { mongoose } = require('../db/mongoose')
const { User } = require('../models')

module.exports = {
    /**
     * Register a new user to db.
     * @param {*} body Body of the new user.
     * @returns The created user.
     */
    create: async (body) => {
        // Create an user if email is not exist.
        const user = await new User(body).save()
        return user
    },

    retrieve: async (_id) => {
        const user = await User.findById(_id).exec()
        return user
    },

    find: async (filter) => {
        const users = await User.find(filter).exec()
        return users
    },

    retrieveByEmail: async (email) => {
        const user = await User.findOne({ email }).exec()
        return user
    },

    update: async (_id, body) => {
        const user = await User.findByIdAndUpdate(_id, body, {
            new: true,
        }).exec()
        return user
    },

    delete: async (_id) => {
        const user = await User.findByIdAndRemove(_id).exec()
        return user
    },
}
