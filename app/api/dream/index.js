const express = require('express')
const router = new express.Router()

const dreamController = require('../../controllers').dream
const { mongoChecker } = require('../../middlewares')
const {
    authenticateToken: authChecker,
} = require('../../middlewares/authMiddleware')

/**
 * Get all dreams.
 */
router.get(
    '/dreams',
    // Middlewares
    mongoChecker,
    // Controller
    dreamController.getDreams
)

/**
 * Get dreams of a specific user.
 */
router.get(
    '/user/:user_id/dreams',
    // Middlewares
    mongoChecker,
    authChecker,
    // Controller
    dreamController.getDreams
)

/**
 * Get a specific dream
 */
router.get(
    '/dreams/:dream_id',
    // Middlewares
    mongoChecker,
    authChecker,
    // Controller
    dreamController.getDream
)

/**
 * Create a dream.
 */
router.post('/dreams', mongoChecker, authChecker, dreamController.createDream)

/**
 * Delete a dream.
 */
router.delete(
    '/dreams/:dream_id',
    mongoChecker,
    authChecker,
    dreamController.deleteDream
)

/**
 * Update a dream.
 */
router.put(
    '/dreams/:dream_id',
    mongoChecker,
    authChecker,
    dreamController.updateDream
)

module.exports = router
