const Color = require('../models/ColorModel')
const asyncHandler = require('express-async-handler')
const validateMongodbId = require('../utils/validateMongodbId')

// @desc   Create a Color
// @route  POST /
// @access
const createColor = asyncHandler(async (req, res) => {
    try {
        const category = await Color.create(req.body)
        res.json(category)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Update a Color
// @route  PUT /:id
// @access
const updateColor = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongodbId(id)

    try {
        const category = await Color.findByIdAndUpdate(id, req.body, {new: true})
        res.json(category)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Delete a Color
// @route  DELETE /:id
// @access
const deleteColor = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongodbId(id)

    try {
        const category = await Color.findByIdAndDelete(id)
        res.json(category.id)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Get a Color
// @route  GET /:id
// @access
const getColor = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongodbId(id)

    try {
        const category = await Color.findById(id)
        res.json(category)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Get all category
// @route  GET /
// @access
const getAllColors = asyncHandler(async (req, res) => {
    try {
        const categories = await Color.find()
        res.json(categories)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createColor,
    updateColor,
    deleteColor,
    getColor,
    getAllColors
}