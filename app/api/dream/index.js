const router = require('express').Router()

const dreamController = require('../../controllers').dream
const { mongoChecker } = require('../../middlewares')


/**
 * Get all dreams for home page.
 */
router.get(
    "/dreams",
    // Middlewares
    mongoChecker,
    // Controller
    dreamController.getDreams
)


module.exports = router
