const express = require('express')
const router = new express.Router()

const collectionController = require('../../controllers').collection
const { mongoChecker } = require('../../middlewares')
const {
    authenticateToken: authChecker,
} = require('../../middlewares/authMiddleware')

/**
 * Get all collections
 */
router.get(
    '/collections',
    // Middlewares
    mongoChecker,
    // Controller
    collectionController.getAllCollections
)

/**
 * Get collections of a specific user.
 */
router.get(
    '/user/:user_id/collections',
    // Middlewares
    mongoChecker,
    authChecker,
    // Controller
    collectionController.getAllCollections
)

/**
 * Get a specific collection
*/
router.get(
    '/collections/:collection_id',
    // Middlewares
    mongoChecker,
    authChecker,
    // Controller
    collectionController.getCollection
)

/**
 * Create a new collection
 */
router.post(
    '/collections', 
    mongoChecker, 
    authChecker, 
    collectionController.createCollection
)

/**
 * Delete a collection
 */
router.delete(
    '/collections/:collection_id',
    mongoChecker,
    authChecker,
    collectionController.deleteCollection
)

/**
 * Update the title of a collection
 */
router.put(
    '/collections/:collection_id',
    mongoChecker,
    authChecker,
    collectionController.updateTitle
)

/**
 * Add a dream to a collection
 */
router.put(
    '/collections/:collection_id',
    mongoChecker,
    authChecker,
    collectionController.addDream
)

/**
 * Remove a dream from a collection
 */
router.put(
    '/collections/:collection_id',
    mongoChecker,
    authChecker,
    collectionController.removeDream
)

module.exports = router
