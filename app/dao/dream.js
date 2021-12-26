const { mongoose } = require('../db/mongoose')
const { Dream } = require('../models')

/**
 * Add a new Dream to db.
 * @param {*} body Body of the new dream.
 * @returns The created Dream.
 */
module.exports.create = async (body) => {
    // Create a new dream
    const dream = new Dream(body)

    // Save to db
    const newDream = await dream.save()
    return newDream
}

module.exports.retrieve = async (id) => {
    // TODO: IMPLEMENT THIS
}

module.exports.update = async (id, body) => {
    // TODO: IMPLEMENT THIS
}

module.exports.delete = async (id) => {
    // TODO: IMPLEMENT THIS
}

/**
 * Find an array of Dreams that satisfy the filter.
 * @param {Object} filter 
 * @returns Array of Dreams.
 */
module.exports.find = async (filter) => {
    // Query by filter
    const dreams = await Dream.find(filter).exec()
    return dreams
}
