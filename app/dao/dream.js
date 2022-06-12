const { Dream } = require('../models')

module.exports = {
    /**
     * Add a new Dream to db.
     * @param {*} body Body of the new dream.
     * @return {any} The created Dream.
     */
    create: async (body) => {
        // Create a new dream
        const dream = new Dream(body)

        // Save to db
        const newDream = await dream.save()
        return newDream
    },

    /**
     * Find a Dream by id.
     * @param {*} id Id of the target dream.
     * @return {any} The retrieved Dream.
     */
    retrieve: async (id) => {
        const dream = await Dream.findById(id).exec()
        return dream
    },

    /**
     * Find a Dream by id and update it according to the update arg.
     * @param {*} id Id of the target dream.
     * @param {*} body Body of the update message.
     * @return {any} The updated Dream.
     */
    update: async (id, body) => {
        const dream = await Dream.findByIdAndUpdate(id, body, {
            new: true,
        }).exec()
        return dream
    },

    /**
     * Find a Dream by id and delete it.
     * @param {*} id Id of the target dream.
     * @return {any} The deleted dream.
     */
    delete: async (id) => {
        const dream = await Dream.findByIdAndRemove(id).exec()
        return dream
    },

    /**
     * Find an array of Dreams that satisfy the filter.
     * @param {Object} filter
     * @return {[any]} Array of Dreams.
     */
    find: async (
        filter = {},
        pagination = {
            page: 0,
            limit: 10,
        }
    ) => {
        // Query by filter
        const dreams = await Dream.find(filter)
            .limit(pagination.limit * 1)
            .skip(pagination.page * pagination.limit)
            .exec()
        return dreams
    },
}
