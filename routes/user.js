const express = require('express');

const authMiddleware = require('../middlewares/auth');
const userController = require('../controllers/user');

const router = express.Router();

router.post('/', userController.postSignUp);

router.post('/login', userController.postLogin);

router.get('/me', authMiddleware, userController.getProfile);

router.get('/me/logout', authMiddleware, userController.postLogOut);

router.get('/me/logoutall', authMiddleware, userController.postLogOutAll);

module.exports = router;