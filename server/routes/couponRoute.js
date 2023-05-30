const express = require('express')
const router = express.Router()
const {createCoupon, getCoupon, updateCoupon, deleteCoupon} = require("../controllers/CouponController");
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createCoupon)
router.get("/", authMiddleware, isAdmin, getCoupon)
router.put("/:id", authMiddleware, isAdmin, updateCoupon)
router.delete("/:id", authMiddleware, isAdmin, deleteCoupon)

module.exports = router