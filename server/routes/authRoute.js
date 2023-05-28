const express = require('express')
const router = express.Router()
const {createUser, loginUser, getAllUsers, getUser, deleteUser, updateUser, blockUser, unblockUser, handleRefreshToken, logoutUser, updatePassword, forgotPasswordToken, resetPassword} = require('../controllers/userController')
const {authMiddleware, isAdmin} = require('../middlewares/authMiddleware')

router.post('/register', createUser)
router.post('/login', loginUser)
router.post('logout', logoutUser)
router.post('/forgot-password-token', forgotPasswordToken)

router.get('/all-users', getAllUsers)
router.get('/refresh/:id', authMiddleware, isAdmin, handleRefreshToken)
router.get('/:id', authMiddleware, isAdmin ,getUser)

router.put('/edit-user/:id', authMiddleware, updateUser)
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser)
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser)
router.put('/password', authMiddleware, updatePassword)
router.put('/reset-password/:token', resetPassword)

router.delete('/:id', deleteUser)

module.exports = router