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

// get a specific dream
router.get(
    "/dream/:dream_id",
    // Middlewares
    mongoChecker,
    // Controller
    dreamController.getDream
)

router.post(
    "/dream/:user_id",
    mongoChecker,
    dreamController.createDream
)

router.delete(
    "/dream/:dream_id",
    mongoChecker,
    dreamController.deleteDream
)

router.patch(
    "/dream/:dream_id",
    mongoChecker,
    dreamController.updateDream
)

module.exports = router
