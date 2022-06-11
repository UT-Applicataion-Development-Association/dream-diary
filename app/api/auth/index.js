const express = require('express')
const router = express.Router()
const authController = require('../../controllers').auth
const { mongoChecker } = require('../../middlewares')
const {
    authenticateToken: authChecker,
} = require('../../middlewares/authMiddleware')

/**
 * Register an user
 */
router.post(
    '/register',
    // Middlewares
    mongoChecker,
    // Controller
    authController.registerUser
)

/**
 * Authenticate an user
 */
router.post(
    '/login',
    // Middlewares
    mongoChecker,
    // Controller
    authController.authUser
)

/**
 * Update an user info
 */
router.put(
    '/update',
    // Middlewares
    mongoChecker,
    authChecker,
    // Controller
    authController.updateUser
)

// /**
//  * Update an user's password
// **/
// router.put(
//     "/updateIPwd",
//     // Middlewares
//     mongoChecker,
//     authChecker,
//     // Controller
//     authController.updateUserPassword
// )

module.exports = router
