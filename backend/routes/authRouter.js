const express = require('express')
const authController = require('../controllers/authController')
const validators = require('../middlewares/validator');
const { identifier } = require('../middlewares/identification');



const router = express.Router();
router.post('/signup',authController.signup)
router.post('/signin',authController.signin)
router.post('/signout',authController.signout)
router.patch('/sendVerificationCode',identifier,authController.verificationCode )
router.patch('/verify-verification-code',authController.verifyVerificationCode)
router.patch('/change-password',identifier,authController.changePassword)
router.patch('/forgot-verify-code',identifier,authController.sendForgotVerificationCode)
router.patch('/forgot-verify-code-value',identifier,authController.forgotVerificationCode)

module.exports = router;