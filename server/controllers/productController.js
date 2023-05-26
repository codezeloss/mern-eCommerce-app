const Product = require('../models/ProductModel')
const asyncHandler = require('express-async-handler')

// @desc   Create a Product
// @route  POST /create-post
// @access
const createProduct = asyncHandler(async (req, res) => {
    res.json("Hey Product")
})

module.exports = {createProduct}