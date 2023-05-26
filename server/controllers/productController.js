const Product = require('../models/ProductModel')
const asyncHandler = require('express-async-handler')
const slugify = require('slugify')

// @desc   Create a Product
// @route  POST /
// @access
const createProduct = asyncHandler(async (req, res) => {
    try {
        // slugify
        if(req.body.title) {
            req.body.slug = slugify(req.body.title)
        }

        const product = await Product.create(req.body)
        res.json(product)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Get all Products
// @route  GET /
// @access
const getAllProducts = asyncHandler(async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Get a Product
// @route  GET /:id
// @access
const getProduct = asyncHandler(async (req, res) => {
    const {id} = req.params

    try {
        const product = await Product.findById(id)
        res.json(product)
    } catch (error) {
        throw new Error(error)
    }
})


// @desc   Update a Product
// @route  PUT /
// @access
const updateProduct = asyncHandler(async (req, res) => {
    const {id} = req.params

    try {
        // slugify
        if(req.body.title) {
            req.body.slug = slugify(req.body.title)
        }

        const product = await Product.findByIdAndUpdate(id, req.body, {new: true})
        res.json(product)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Update a Product
// @route  PUT /
// @access
const deleteProduct = asyncHandler(async (req, res) => {
    const {id} = req.params

    try {
        const product = await Product.findByIdAndDelete(id)
        res.json(product.id)
    } catch (error) {
        throw new Error(error)
    }
})



module.exports = {createProduct, getProduct, getAllProducts, updateProduct, deleteProduct}