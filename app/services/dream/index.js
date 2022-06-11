const { dreamDao } = require('../../dao')

class DreamServices {
    /**
     * Get all dreams.
     * @param {Number} params
     * @return {any}
     */
    async getDreams(params = { pagination: 1 }) {
        // Log
        console.log('Get dreams by', params)

        const dreams = (await dreamDao.find(params)) || []
        return dreams
    }

    async createDream(title, author, content, tags, image) {
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
