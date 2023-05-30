const express = require('express')
const router = express.Router()
const {createBlogCategory, updateBlogCategory, deleteBlogCategory, getBlogCategory, getAllBlogCategories} = require("../controllers/BlogCategoryController");
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createBlogCategory)
router.put("/:id", authMiddleware, isAdmin, updateBlogCategory)
router.delete("/:id", authMiddleware, isAdmin, deleteBlogCategory)
router.get("/:id", getBlogCategory)
router.get("/", getAllBlogCategories)

module.exports = router