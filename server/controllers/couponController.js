const Coupon = require("../models/CouponModel");
const asyncHandler = require("express-async-handler");
const validateMongodbId = require("../utils/validateMongodbId");

// @desc   Create a Coupon
// @route  POST /
// @access
const createCoupon = asyncHandler(async (req, res) => {
  try {
    const coupon = await Coupon.create(req.body);
    res.json(coupon);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Get all Coupons
// @route  GET /
// @access
const getAllCoupons = asyncHandler(async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Get a Coupon
// @route  GET /:id
// @access
const getCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const category = await Coupon.findById(id);
    res.json(category);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Update a Coupon
// @route  PUT /
// @access
const updateCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const coupon = await Coupon.findByIdAndUpdate(id, req.body, { new: true });
    res.json(coupon);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Delete a Coupon
// @route  DELETE /
// @access
const deleteCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const coupon = await Coupon.findByIdAndDelete(id);
    res.json(coupon.id);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createCoupon,
  getAllCoupons,
  getCoupon,
  updateCoupon,
  deleteCoupon,
};