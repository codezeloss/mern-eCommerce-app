const Enquiry = require('../models/EnquiryModel')
const asyncHandler = require('express-async-handler')
const validateMongodbId = require('../utils/validateMongodbId')

// @desc   Create a Enquiry
// @route  POST /
// @access
const createEnquiry = asyncHandler(async (req, res) => {
    try {
        const category = await Enquiry.create(req.body)
        res.json(category)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Update a Enquiry
// @route  PUT /:id
// @access
const updateEnquiry = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongodbId(id)

    try {
        const category = await Enquiry.findByIdAndUpdate(id, req.body, {new: true})
        res.json(category)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Delete a Enquiry
// @route  DELETE /:id
// @access
const deleteEnquiry = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongodbId(id)

    try {
        const category = await Enquiry.findByIdAndDelete(id)
        res.json(category.id)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Get a Enquiry
// @route  GET /:id
// @access
const getEnquiry = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongodbId(id)

    try {
        const category = await Enquiry.findById(id)
        res.json(category)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Get all category
// @route  GET /
// @access
const getAllEnquiries = asyncHandler(async (req, res) => {
    try {
        const categories = await Enquiry.find()
        res.json(categories)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createEnquiry,
    updateEnquiry,
    deleteEnquiry,
    getEnquiry,
    getAllEnquiries
}