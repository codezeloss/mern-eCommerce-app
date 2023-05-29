const Category = require('../models/CategoryModel')
const asyncHandler = require('express-async-handler')
const validateMongodbId = require('../utils/validateMongodbId')

// @desc   Create a Blog Post
// @route  POST /
// @access
const createCategory = asyncHandler(async (req, res) => {
    try {
        const category = await Category.create(req.body)
        res.json(category)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createCategory
}