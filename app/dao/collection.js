const { Collection } = require('../models');
const user = require('./user');

module.exports = {
    /**
     * Add a new collection to db
     * @param {*} body Body of the new collection
     * @returns The new collection
     */
    create: async (body) => {
        // Create a collection
        const collection = new Collection(body)

        // Save to db
        const newCollection = await collection.save()
        return newCollection
    },

    /**
     * Find collection by id.
     * @param {*} _id Id of the target collection
     * @return {any} The retrieved collection.
     */
    retrieve: async (_id) => {
        const collection = await Collection.findById(_id).exec()
        return collection
    },

    /**
     * Find and update collection by id.
     * @param {*} _id Id of the target collection
     * @param {*} body Body of the update collection
     * @return {any} The updated collection
     */
    update: async (_id, body) => {
        // Question: Should we add the id of dream to collection using
        /* Saves.findByIdAndUpdate(_id, 
         * {author, 
            title, 
            $addToSet: { 
                        ofDream: dreamID }})
        **/
        const collection = await Collection.findByIdAndUpdate(_id, body).exec()
        return collection
    },

    /**
     * Find and delete collection by id
     * @param {*} _id Id of the collection to be deleted
     * @return {any} The deleted collection
     */
    delete: async (_id) => {
        const collection = await Collection.findByIdAndRemove(id).exec()
        return collection
    },

    /**
     * Find an array of collections that satisfy the filter.
     * @param {Object} filter
     * @return {[any]} Array of collections.
     */
    find: async (
        filter = {},
        pagination = {
            page: 0,
            limit: 10,
        }
    ) => {
        // Query by filter
        const collections = await Collection.find(filter)
            .limit(pagination.limit * 1)
            .skip(pagination.page * pagination.limit)
            .exec()
        return collections
    },
}