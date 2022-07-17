const { dreamDao } = require('../../dao')

const { ResourceNotFoundException } = require('../../models/Error')

class DreamServices {
    /**
     * Get all dreams.
     * @param {Number} params
     * @return {any}
     */
    async getDreams(filter, pagination) {
        // Log
        console.log('Get dreams by', filter, pagination)

        const dreams = await dreamDao.find(filter, pagination)
        return dreams || []
    }

    async createDream({ title, author, content, tags, image }) {
        const dream = await dreamDao.create({
            title,
            author,
            content,
            tags,
            image,
        })

        return dream
    }

    async getDream(id) {
        const dream = await dreamDao.retrieve(id)
        if (!dream) {
            throw new ResourceNotFoundException(`Dream ${id} not found`)
        }
        return dream
    }

    async updateDream(id, updates) {
        const updatedDream = await dreamDao.update(id, updates)
        return updatedDream
    }

    async deleteDream(id) {
        const removalResult = await dreamDao.delete(id)
        return removalResult
    }
}

module.exports = DreamServices
