const { collectionDao } = require('../../dao')

class CollectionServices {
    /**
     * Get all collections
     */
    async getAllCollections(filter, pagination) {
        const collections = (await collectionDao.find(filter, pagination)) || []
        return collections
    }

    async createCollection({ user, title, ofDream = []}) {
        const dupTitle = await collectionDao.find({ user, title })
        // Check if the title is already used by the user
        if (dupTitle) {
            throw new Error('Duplicate collection title: ' + dupTitle.title);
        }

        const collection = await collectionDao.create({
            author,
            title,
            ofDream,
        })

        return collection
    }

    async getCollection(_id) {
        const collection = await collectionDao.retrieve(_id)
        return collection
    }

    async setTitle(_id, user, title) {
        const collection = await collectionDao.retrieve(_id)
        if (collection.user !== user) {
            throw new Error('Cannot Access: Wrong user')
        }

        const dupTitle = await collectionDao.find({ user, title })
        // Check if the title is already used by the user
        if (dupTitle) {
            throw new Error('Duplicate collection title: ' + dupTitle.title);
        }

        const body = {
            user,
            title,
            dreams: collection.dreams,
        }

        const updatedCollection = await collectionDao.update(_id, body)
        return updatedCollection
    }

    async addDream(_id, user, dreamID) {
        const collection = await collectionDao.retrieve(_id)
        if (collection.user !== user) {
            throw new Error('Cannot Access: Wrong user')
        }

        const body = {
            user,
            $addToSet: { dreams: dreamID }
        }

        const updatedCollection = await collectionDao.update(_id, body)
        return updatedCollection
    }

    async removeDream(_id, user, dreamID) {
        const collection = await collectionDao.retrieve(_id)
        if (collection.user !== user) {
            throw new Error('Cannot Access: Wrong user')
        }

        const body = {
            user,
            $pull: { dreams: dreamID } // delete dream from array dreams
        }

        const updatedCollection = await collectionDao.update(_id, body)
        return updatedCollection
    }

    async deleteCollection(_id, user) {
        const collection = await collectionDao.retrieve(_id)
        if (collection.user !== user) {
            throw new Error('Cannot Access: Wrong user')
        }
        
        const deletedCollection = await collectionDao.delete(_id)
        return deletedCollection 
    }
}

module.exports = CollectionServices
