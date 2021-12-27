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

        // TODO: IMPLEMENT THIS
        const dreams = await dreamDao.find() || []
        return dreams
    }

    async createDream(title, dreamer, content, tags, image) {
        // TODO: IMPLEMENT THIS
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
        // TODO: IMPLEMENT THIS
    }

    async updateDream(id, updates) {
        // TODO: IMPLEMENT THIS
    }

    async deleteDream(id) {
        // TODO: IMPLEMENT THIS
    }
}

module.exports = DreamServices