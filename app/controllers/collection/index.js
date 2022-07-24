const mongoose = require('mongoose')
const CollectionServices = require('../../services').Collection
const { Response, response } = require('../../utils/response')

module.exports = {
    getAllCollections: async (req, res) => {
        try {
            const filter = req.query.search
            const pagination = {
                page: req.query.page,
                limit: 10,
            }

            const collectionServices = new CollectionServices()
            const collections = await collectionServices.getAllCollections(filter, pagination)
            
            res.send(new Response({ entity: { collections} }))
        } catch (err) {
            console.error(err)
            res.status(500).send(new Response({ msg: err, status: 500 }))
        }
    },

    createCollection: async (req, res) => {
        try {
            const body = {
                user: req.user.id,
                title: req.body.title,
                dreams: req.body.dreams || [],
            }

            const collectionServices = new CollectionServices()
            const collection = await collectionServices.createCollection(...body)

            res.send(new Response({ entity: { collection}}))
        } catch (err) {
            console.error(err)
            res.status(500).send(new Response({ msg: err, status: 500 }))
        }
    },

    getCollection: async(req, res) => {
        try {
            const { _id } = req.body
            const collectionServices = new CollectionServices()

            if (!mongoose.isValidObjectId(_id)) {
                res.status(400).send(
                    new Response({ status: 400, msg: 'Invalid _id' })
                )
                return
            }

            const collection = await collectionServices.getCollection(_id)

            if (collection) {
                res.send(new Response({ entity: { collection } }))
            } else {
                res.status(404).send(response.NOT_FOUND)
            }
        } catch (err) {
            console.error(err)
            res.status(500).send(new Response({ msg: err, status: 500 }))
        }
    },

    updateTitle: async(req, res) => {
        try {
            const user = req.user._id
            const { _id, title } = req.body

            const collectionServices = new CollectionServices()

            if (!mongoose.isValidObjectId(_id)) {
                res.status(400).send(
                    new Response({ status: 400, msg: 'Invalid _id' })
                )
                return
            }

            const updatedCollection = await collectionServices.setTitle(
                _id, 
                user,
                title
            )

            if (updatedCollection) {
                res.send(new Response({ entity: { collections: updatedCollection }}))
            } else {
                res.status(404).send(response.NOT_FOUND)
            }
        } catch (err) {
            console.error(err)
            res.status(500).send(new Response({ msg: err, status: 500 }))
        }
    },

    addDream: async (req, res) => {
        try {
            const user = req.user._id
            const { _id, dreamID } = req.body

            const collectionServices = new CollectionServices()

            if (!mongoose.isValidObjectId(_id)) {
                res.status(400).send(
                    new Response({ status: 400, msg: 'Invalid _id' })
                )
                return
            }

            const updatedCollection = await collectionServices.addDream(
                _id, 
                user,
                dreamID
            )

            if (updatedCollection) {
                res.send(new Response({ entity: { collections: updatedCollection }}))
            } else {
                res.status(404).send(response.NOT_FOUND)
            }
        } catch (err) {
            console.error(err)
            res.status(500).send(new Response({ msg: err, status: 500 }))
        }
    },

    removeDream: async (req, res) => {
        try {
            const user = req.user._id
            const { _id, dreamID } = req.body

            const collectionServices = new CollectionServices()

            if (!mongoose.isValidObjectId(_id)) {
                res.status(400).send(
                    new Response({ status: 400, msg: 'Invalid _id' })
                )
                return
            }

            const updatedCollection = await collectionServices.removeDream(
                _id, 
                user,
                dreamID
            )

            if (updatedCollection) {
                res.send(new Response({ entity: { collections: updatedCollection }}))
            } else {
                res.status(404).send(response.NOT_FOUND)
            }
        } catch (err) {
            console.error(err)
            res.status(500).send(new Response({ msg: err, status: 500 }))
        }
    },

    deleteCollection: async (req, res) => {
        try {
            const user = req.user._id
            const _id = req.body
            if (!mongoose.isValidObjectId(_id)) {
                res.status(400).send(
                    new Response({ status: 400, msg: 'Invalid _id' })
                )
                return
            }
            
            const collectionServices = new CollectionServices()

            const removedCollection = await collectionServices.deleteCollection(_id, user)
            if (removedCollection) {
                res.send(new Response({ entity: { collections: removedCollection } }))
            } else {
                res.status(404).send(response.NOT_FOUND)
            }
        } catch (err) {
            console.error(err)
            res.status(500).send(new Response({ msg: err, status: 500 }))
        }
    },
    
}