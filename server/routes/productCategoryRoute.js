const express = require('express')
const router = express.Router()
const {createProductCategory, updateProductCategory, deleteProductCategory, getProductCategory, getAllProductCategories} = require("../controllers/ProductCategoryController");
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createProductCategory)
router.put("/:id", authMiddleware, isAdmin, updateProductCategory)
router.delete("/:id", authMiddleware, isAdmin, deleteProductCategory)
router.get("/:id", getProductCategory)
router.get("/", getAllProductCategories)

module.exports = router