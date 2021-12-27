const { mongoose } = require('../db/mongoose')
const { Dream } = require('../models')

module.exports = {
    /**
     * Add a new Dream to db.
     * @param {*} body Body of the new dream.
     * @returns The created Dream.
     */
    create: async (body) => {
        // Create a new dream
        const dream = new Dream(body)

        // Save to db
        const newDream = await dream.save()
        return newDream
    },

    retrieve: async (id) => {
        // TODO: IMPLEMENT THIS
    },

    update: async (id, body) => {
        // TODO: IMPLEMENT THIS
    },

    delete: async (id) => {
        // TODO: IMPLEMENT THIS
    },

    /**
     * Find an array of Dreams that satisfy the filter.
     * @param {Object} filter 
     * @returns Array of Dreams.
     */
    find: async (filter) => {
        // Query by filter
        const dreams = await Dream.find(filter).exec()
        return dreams
    }
}
