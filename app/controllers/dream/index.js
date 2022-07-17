const mongoose = require('mongoose')
const {
    ResourceNotFoundException,
    AuthenticationException,
    NoPermissionException,
} = require('../../models/Error')

const DreamServices = require('../../services/dream')
const { Response, response } = require('../../utils/response')

class DreamController {
    getDreams = async (req, res, next) => {
        try {
            // Get request data
            const filter = req.query.search
            const pagination = {
                page: req.query.page >= 0 ? req.query.page : 0,
                limit: 10,
            }

            // Get dreams from services
            const dreamServices = new DreamServices()
            const dreams = await dreamServices.getDreams(filter, pagination)

            // Return response
            res.send(new Response({ entity: { dreams } }))
        } catch (err) {
            next(err)
        }
    }

    createDream = async (req, res, next) => {
        try {
            // Get request data
            const author = req.user._id
            const body = {
                title: req.body.title || '',
                content: req.body.content || 'No content',
                tags: req.body.tags || [],
                image: req.body.image || null,
            }

            // Create dreams in database
            const dreamServices = new DreamServices()
            const dream = await dreamServices.createDream({ ...body, author })

            // Return response
            res.send(new Response({ entity: { dream } }))
        } catch (err) {
            next(err)
        }
    }

    deleteDream = async (req, res, next) => {
        const id = req.params.dream_id
        try {
            const dreamServices = new DreamServices()
            const targetDream = await dreamServices.getDream(id)

            if (
                String(targetDream.author) === req.user._id ||
                req.user.isAdmin
            ) {
                const removedDream = await dreamServices.deleteDream(id)
                if (removedDream) {
                    res.send(new Response({ entity: { dream: removedDream } }))
                } else {
                    throw new ResourceNotFoundException()
                }
            } else {
                // Not allowed to remove other's dream except for admin
                throw new NoPermissionException()
            }
        } catch (err) {
            next(err)
        }
    }

    getDream = async (req, res, next) => {
        const id = req.params.dream_id
        try {
            const dreamServices = new DreamServices()
            const dream = await dreamServices.getDream(id)

            if (dream) {
                res.send(new Response({ entity: { dream } }))
            } else {
                throw new ResourceNotFoundException()
            }
        } catch (err) {
            next(err)
        }
    }

    updateDream = async (req, res, next) => {
        // FIXME: If a field is not provided, you will overwrite the original content

        const id = req.params.dream_id

        const updates = {
            title: req.body.title,
            date: req.body.date,
            content: req.body.content,
            tags: req.body.tags,
            image: req.body.image,
        }
        // Remove unprovided fields
        Object.keys(updates).forEach(
            (key) => updates[key] === undefined && delete updates[key]
        )

        try {
            const dreamServices = new DreamServices()
            const targetDream = await dreamServices.getDream(id)

            if (
                String(targetDream.author) === req.user._id ||
                req.user.isAdmin
            ) {
                const updatedDream = await dreamServices.updateDream(
                    id,
                    updates
                )

                if (updatedDream) {
                    res.send(new Response({ entity: { dream: updatedDream } }))
                } else {
                    throw new ResourceNotFoundException()
                }
            } else {
                throw new NoPermissionException()
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = DreamController
