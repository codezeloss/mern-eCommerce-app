const ProductCategory = require("../models/ProductCategoryModel");
const asyncHandler = require("express-async-handler");
const validateMongodbId = require("../utils/validateMongodbId");

// @desc   Create a FamousProduct category
// @route  POST /
// @access
const createProductCategory = asyncHandler(async (req, res) => {
  try {
    const category = await ProductCategory.create(req.body);
    res.json(category);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Update a FamousProduct category
// @route  PUT /:id
// @access
const updateProductCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const category = await ProductCategory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(category);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Delete a FamousProduct category
// @route  DELETE /:id
// @access
const deleteProductCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const category = await ProductCategory.findByIdAndDelete(id);
    res.json(category.id);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Get a FamousProduct category
// @route  GET /:id
// @access
const getProductCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const category = await ProductCategory.findById(id);
    res.json(category);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Get all FamousProduct categories
// @route  GET /
// @access
const getAllProductCategories = asyncHandler(async (req, res) => {
  try {
    const categories = await ProductCategory.find();
    res.json(categories);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createProductCategory,
  updateProductCategory,
  deleteProductCategory,
  getProductCategory,
  getAllProductCategories,
};