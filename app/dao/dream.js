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
        const dream = await Dream.find({_id: id})
        return dream
    },

    update: async (id, body) => {
        // TODO: IMPLEMENT THIS
    },

    delete: async (id) => {
        // TODO: IMPLEMENT THIS
        const removal_result = await Dream.remove({_id: id})
        return removal_result
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
