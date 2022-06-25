const mongoose = require('mongoose')
const SavesServices = require('../../services').Saves
const { Response, response } = require('../../utils/response')

module.exports = {
    getAllSaves: async (req, res) => {
        try {
            const filter = req.query.search
            const pagination = {
                page: req.query.page,
                limit: 10,
            }

            const savesServices = new SavesServices()
            const saves = await savesServices.getAllSaves(filter, pagination)
            
            res.send(new Response({ entity: { saves} }))
        } catch (err) {
            console.error(err)
            res.status(500).send(new Response({ msg: err, status: 500 }))
        }
    },

    createSave: async (req, res) => {
        try {
            const body = {
                author: req.user.id,
                title: req.body.title,
                ofDream: req.body.ofDream || [],
            }

            const savesServices = new SavesServices()
            const save = await savesServices.createSave(...body)

            res.send(new Response({ entity: { save}}))
        } catch (err) {
            console.error(err)
            res.status(500).send(new Response({ msg: err, status: 500 }))
        }
    },

    getSave: async(req, res) => {
        try {
            const _id = req.body
            const savesServices = new SavesServices()

            if (!mongoose.isValidObjectId(_id)) {
                res.status(400).send(
                    new Response({ status: 400, msg: 'Invalid _id' })
                )
                return
            }

            const save = await savesServices.getSave(_id)

            if (save) {
                res.send(new Response({ entity: { save } }))
            } else {
                res.status(404).send(response.NOT_FOUND)
            }
        } catch (err) {
            console.error(err)
            res.status(500).send(new Response({ msg: err, status: 500 }))
        }
    },

    updateSave: async(req, res) => {
        try {
            const { _id, author, title, ofDream } = req.body
            const updateBody = { author, title, ofDream }

            const savesServices = new SavesServices()

            if (!mongoose.isValidObjectId(_id)) {
                res.status(400).send(
                    new Response({ status: 400, msg: 'Invalid _id' })
                )
                return
            }

            const targetSave = await savesServices.getSave(_id)
            if (
                String(targetSave.author) === req.user._id ||
                req.user.isAdmin
            ) {
                const updatedSave = await savesServices.updateSave(
                    _id, 
                    updateBody
                )

                if (updatedSave) {
                    res.send(new Response({ entity: { saves: updatedSave }}))
                } else {
                    res.status(404).send(response.NOT_FOUND)
                }
            } else {
                res.status(403).send(response.FORBIDDEN)
            }
        } catch (err) {
            console.error(err)
            res.status(500).send(new Response({ msg: err, status: 500 }))
        }
    },

    deleteSave: async (req, res) => {
        try {
            const _id = req.body
            if (!mongoose.isValidObjectId(_id)) {
                res.status(400).send(
                    new Response({ status: 400, msg: 'Invalid _id' })
                )
                return
            }
            
            const savesServices = new SavesServices()
            const targetSave = await savesServices.getSave(_id) 

            if (
                String(targetSave.author) === req.user._id ||
                req.user.isAdmin
            ) {
                const removedSave = await savesServices.deleteSave(_id)
                if (removedSave) {
                    res.send(new Response({ entity: { saves: removedSave } }))
                } else {
                    res.status(404).send(response.NOT_FOUND)
                }
            } else {
                res.status(403).send(response.FORBIDDEN)
            }
        } catch (err) {
            console.error(err)
            res.status(500).send(new Response({ msg: err, status: 500 }))
        }
    },
    
}