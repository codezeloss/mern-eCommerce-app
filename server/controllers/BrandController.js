const Brand = require('../models/BrandModel')
const asyncHandler = require('express-async-handler')
const validateMongodbId = require('../utils/validateMongodbId')

// @desc   Create a Brand
// @route  POST /
// @access
const createBrand = asyncHandler(async (req, res) => {
    try {
        const category = await Brand.create(req.body)
        res.json(category)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Update a Brand
// @route  PUT /:id
// @access
const updateBrand = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongodbId(id)

    try {
        const category = await Brand.findByIdAndUpdate(id, req.body, {new: true})
        res.json(category)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Delete a Brand
// @route  DELETE /:id
// @access
const deleteBrand = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongodbId(id)

    try {
        const category = await Brand.findByIdAndDelete(id)
        res.json(category.id)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Get a Brand
// @route  GET /:id
// @access
const getBrand = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongodbId(id)

    try {
        const category = await Brand.findById(id)
        res.json(category)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Get all category
// @route  GET /
// @access
const getAllBrands = asyncHandler(async (req, res) => {
    try {
        const categories = await Brand.find()
        res.json(categories)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createBrand,
    updateBrand,
    deleteBrand,
    getBrand,
    getAllBrands
}