const express = require('express')
const router = express.Router()
const UserController = require('../../controllers/auth')
const { mongoChecker } = require('../../middlewares')
const {
    authenticateToken: authChecker,
} = require('../../middlewares/authMiddleware')

const userController = new UserController()

/**
 * Register an user
 */
router.post(
    '/register',
    // Middlewares
    mongoChecker,
    // Controller
    userController.registerUser
)

/**
 * Authenticate an user
 */
router.post(
    '/login',
    // Middlewares
    mongoChecker,
    // Controller
    userController.authenticateUser
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
    userController.updateUser
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
//     userController.updateUserPassword
// )

module.exports = router
