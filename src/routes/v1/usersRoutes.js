const express = require("express")
const router = express.Router()
const authentication = require("../../utils/authentication")
const userController = require("../../controllers/usersController")
router.route("/login")
    .post(authentication.login)
router.route("/signup")
    .post(authentication.signup)
router.route("/logout")
    .delete(authentication.logout) 
router.route("/user/courses")
    .put(userController.addCoursesToUser)
module.exports = router