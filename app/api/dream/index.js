const router = require('express').Router()

const dreamController = require('../../controllers').dream
const { mongoChecker } = require('../../middlewares')
const authChecker  = require('../../middlewares/authMiddleware').authenticateToken

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

router.get(
    "/:user_id/dreams",
    // Middlewares
    mongoChecker,
    authChecker,
    // Controller
    dreamController.getDreams
)

// get a specific dream
router.get(
    "/:user_id/dreams/:dream_id",
    // Middlewares
    mongoChecker,
    authChecker,
    // Controller
    dreamController.getDream
)

router.post(
    "/:user_id/dreams",
    mongoChecker,
    //authChecker,
    dreamController.createDream
)

router.delete(
    "/:user_id/dreams/:dream_id",
    mongoChecker,
    authChecker,
    dreamController.deleteDream
)

router.put(
    "/:user_id/dreams/:dream_id",
    mongoChecker,
    //authChecker,
    dreamController.updateDream
)

module.exports = router
