const { dreamDao } = require('../../dao')

class DreamServices {
    /**
     * Get all dreams.
     * @param {Number} pagination 
     * @returns 
     */
    async getDreams(params = { pagination: 1 }) {
        // Log
        console.log("Get dreams by", params)

        const dreams = await dreamDao.find(params) || []
        return dreams
    }

    async createDream(title, dreamer, content, tags, image) {
        const dream = await dreamDao.create({
            title,
            dreamer,
            content,
            tags,
            image
        })

        return dream
    }

    async getDream(id) {
        const dream =  await dreamDao.retrieve(id)
        return dream
    }

    async updateDream(id, updates) {
        const updated_dream = await dreamDao.update(id, updates)
        return updated_dream
    }

    async deleteDream(id) {
        const removal_result = await dreamDao.delete(id)
        return removal_result
    }
}

module.exports = DreamServices