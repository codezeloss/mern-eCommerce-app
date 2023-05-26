const express = require('express')
const router = express.Router()
const {createPost} = require('../controllers/productController')

router.post("/create-product", createPost)

module.exports = router