const express = require('express')
const router = express.Router()
const {createUser, loginUser, getAllUsers, getUser, deleteUser, updateUser} = require('../controllers/userController')

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/all-users', getAllUsers)
router.route("/:id")
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser)

module.exports = router