const express = require('express')
const router = express.Router()
const {isAdmin, authMiddleware} = require("../middlewares/authMiddleware");
const {createBlogPost, updateBlogPost, getBlogPost, getAllBlogPosts, deleteBlogPost, likeBlogPost} = require("../controllers/BlogController");

router.post('/', authMiddleware, isAdmin, createBlogPost)
router.put('/:id', authMiddleware, isAdmin, updateBlogPost)
router.get('/:id', getBlogPost)
router.get('/', getAllBlogPosts)
router.delete('/:id', authMiddleware, isAdmin, deleteBlogPost)

module.exports = router