const BlogCategory = require('../models/BlogCategoryModel')
const asyncHandler = require('express-async-handler')
const validateMongodbId = require('../utils/validateMongodbId')

// @desc   Create a Blog Category
// @route  POST /
// @access
const createBlogCategory = asyncHandler(async (req, res) => {
    try {
        const category = await BlogCategory.create(req.body)
        res.json(category)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Update a Blog Category
// @route  PUT /:id
// @access
const updateBlogCategory = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongodbId(id)

    try {
        const category = await BlogCategory.findByIdAndUpdate(id, req.body, {new: true})
        res.json(category)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Delete a Blog Category
// @route  DELETE /:id
// @access
const deleteBlogCategory = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongodbId(id)

    try {
        const category = await BlogCategory.findByIdAndDelete(id)
        res.json(category.id)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Get a Blog Category
// @route  GET /:id
// @access
const getBlogCategory = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongodbId(id)

    try {
        const category = await BlogCategory.findById(id)
        res.json(category)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Get all Blog categories
// @route  GET /
// @access
const getAllBlogCategories = asyncHandler(async (req, res) => {
    try {
        const categories = await BlogCategory.find()
        res.json(categories)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createBlogCategory,
    updateBlogCategory,
    deleteBlogCategory,
    getBlogCategory,
    getAllBlogCategories
}