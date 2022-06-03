const express = require('express')
const router = new express.Router()

const dreamController = require('../../controllers').dream
const { mongoChecker } = require('../../middlewares')

/**
 * Get all dreams for home page.
 */
router.get(
    '/dreams',
    // Middlewares
    mongoChecker,
    // Controller
    dreamController.getDreams,
)

// get a specific dream
router.get(
    '/dream/:dream_id',
    // Middlewares
    mongoChecker,
    // Controller
    dreamController.getDream,
)

router.post('/dreams', mongoChecker, dreamController.createDream)

router.delete('/dream/:dream_id', mongoChecker, dreamController.deleteDream)

module.exports = router
