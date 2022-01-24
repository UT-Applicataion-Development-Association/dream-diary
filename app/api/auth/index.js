const express = require('express');
const router = express.Router();
const authController = require('../../controllers').auth
const { mongoChecker } = require('../../middlewares')

/**
 * Register an user
 */
 router.post(
    "/register",
    // Middlewares
    mongoChecker,
    // Controller
    authController.registerUser
)

module.exports = router;