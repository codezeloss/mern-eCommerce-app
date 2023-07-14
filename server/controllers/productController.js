const Product = require("../models/ProductModel");
const User = require("../models/UserModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validateMongodbId = require("../utils/validateMongodbId");

const fs = require("fs");

// @desc   Create a FamousProduct
// @route  POST /
// @access
const createProduct = asyncHandler(async (req, res) => {
  try {
    // slugify
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }

    const product = await Product.create(req.body);
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Get all Products
// @route  GET /
// @access
const getAllProducts = asyncHandler(async (req, res) => {
  try {
    // ** Filtering
    const queryObj = { ...req.query };

    // Exclude some fields from queries
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);

    let queryString = JSON.stringify(queryObj);
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );

    let query = Product.find(JSON.parse(queryString));

    // ** Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    // ** Limiting the fields
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    // ** Pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const productCount = await Product.countDocuments();
      if (skip >= productCount) throw new Error("This page doesn't exist");
    }

    const products = await query;
    // const product = await FamousProduct.find(queryObj)

    res.json(products);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Get a FamousProduct
// @route  GET /:id
// @access
const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id).populate("color");
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Update a FamousProduct
// @route  PUT /
// @access
const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    // slugify
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }

    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Update a FamousProduct
// @route  PUT /
// @access
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);
    res.json(product.id);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Add to the Wishlist
// @route  POST /wishlist
// @access
const addToWishList = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const { productId } = req.body;

  try {
    const user = await User.findById(id);

    // Check if the product already added to the user wishlist
    const productAlreadyAdded = user?.wishlist?.find(
      (id) => id.toString() === productId
    );

    if (productAlreadyAdded) {
      let user = await User.findByIdAndUpdate(
        id,
        {
          $pull: { wishlist: productId },
        },
        { new: true }
      );
      res.json(user);
    } else {
      let user = await User.findByIdAndUpdate(
        id,
        {
          $push: { wishlist: productId },
        },
        { new: true }
      );
      res.json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Rating
// @route  POST /rating
// @access
const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, comment, productId } = req.body;

  try {
    const product = await Product.findById(productId);

    // Check if the user already rated the product
    let alreadyRated = product?.ratings?.find(
      (userId) => userId.postedBy.toString() === _id.toString()
    );

    if (alreadyRated) {
      const updateRating = await Product.updateOne(
        { ratings: { $elemMatch: alreadyRated } },
        { $set: { "ratings.$.star": star, "ratings.$.comment": comment } },
        { new: true }
      );
    } else {
      const rateProduct = await Product.findByIdAndUpdate(
        productId,
        {
          $push: {
            ratings: {
              star: star,
              postedBy: _id,
            },
          },
        },
        { new: true }
      );
    }

    // Total Ratings
    const allProducts = await Product.findById(productId);

    let totalRating = allProducts?.ratings.length;
    let ratingSum = allProducts.ratings
      .map((item) => item.star)
      .reduce((prev, curr) => prev + curr, 0);
    let actualRating = Math.round(ratingSum / totalRating);

    let finalProduct = await Product.findByIdAndUpdate(
      productId,
      { totalRating: actualRating },
      { new: true }
    );
    res.json(finalProduct);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  addToWishList,
  rating,
};
