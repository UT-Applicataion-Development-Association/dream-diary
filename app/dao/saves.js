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

    retrieve: async (id) => {
        // TODO
    },

    update: async (filter, body) => {
        // TODO
    },

    delete: async (id) => {
        // TODO
    }
}