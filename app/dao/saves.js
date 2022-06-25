const { Saves } = require('../models');
const user = require('./user');

module.exports = {
    /**
     * Add a new saves to db
     * @param {*} body Body of the new saves
     * @returns The new saves
     */
    create: async (body) => {
        // Create a saves folder
        const saves = new Saves(body);

        // Save to db
        const newSaves = await saves.save();
        return newSaves;
    },

    /**
     * Find saves by id.
     * @param {*} _id Id of the target saves
     * @return {any} The retrieved saves.
     */
    retrieve: async (_id) => {
        const saves = await Saves.findById(_id).exec()
        return saves
    },

    retrieveByTitle: async (title) => {
        const saves = await Saves.findOne({ title }).exec()
        return saves
    },

    /**
     * Find and update saves by id.
     * @param {*} _id Id of the target saves
     * @param {*} body Body of the update saves
     * @return {any} The updated 
     */
    update: async (_id, body) => {
        // Question: Should we add the id of dream to saves using
        /* Saves.findByIdAndUpdate(_id, 
         * {author, 
            title, 
            $addToSet: { 
                        ofDream: dreamID }})
        **/
        const saves = await Saves.findByIdAndUpdate(_id, body).exec()
        return saves
    },

    /**
     * Find and delete saves by id
     * @param {*} _id Id of the saves to be deleted
     * @return {any} The deleted saves
     */
    delete: async (_id) => {
        const saves = await Saves.findByIdAndRemove(id).exec()
        return saves
    },

    /**
     * Find an array of Saves that satisfy the filter.
     * @param {Object} filter
     * @return {[any]} Array of Saves.
     */
    find: async (
        filter = {},
        pagination = {
            page: 0,
            limit: 10,
        }
    ) => {
        // Query by filter
        const saves = await Saves.find(filter)
            .limit(pagination.limit * 1)
            .skip(pagination.page * pagination.limit)
            .exec()
        return saves
    },
}