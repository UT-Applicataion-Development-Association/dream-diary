const { savesDao } = require('../../dao')

class SavesServices {
    /**
     * Get all saves
     */
    async getAllSaves(filter, pagination) {
        const saves = (await savesDao.find(filter, pagination)) || []
        return saves
    }

    async createSave({ author, title, ofDream = []}) {
        const dupTitle = await savesDao.retrieveByTitle(title)
        // Check if the title is already used by the same author
        if (dupTitle && dupTitle.author === author) {
            throw new Error('Duplicate save title: ' + dupTitle.title);
        }

        const save = await savesDao.create({
            author,
            title,
            ofDream,
        })

        return save
    }

    async getSave(_id) {
        const save = await savesDao.retrieve(_id)
        return save
    }

    async getSaveByTitle(title) {
        const save = await savesDao.retrieveByTitle(title)
        return save
    }

    async updateSave(_id, body) {
        const updatedSave = await savesDao.update(_id, body)
        return updatedSave
    }

    async deleteSave(_id) {
        const deletedSave = await savesDao.delete(_id)
        return deletedSave 
    }
}

module.exports = SavesServices
