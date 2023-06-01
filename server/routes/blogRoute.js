const express = require('express')
const router = express.Router()
const {isAdmin, authMiddleware} = require("../middlewares/authMiddleware");
const {createBlogPost, updateBlogPost, getBlogPost, getAllBlogPosts, deleteBlogPost, likeBlogPost, dislikeBlogPost,
    uploadImages
} = require("../controllers/blogController");
const {uploadPhoto, blogImageResize} = require("../middlewares/uploadImages");

router.post('/', authMiddleware, isAdmin, createBlogPost)
router.put("/upload/:id", authMiddleware, isAdmin, uploadPhoto.array('images', 2), blogImageResize, uploadImages)
router.put("/likes", authMiddleware, likeBlogPost)
router.put("/dislikes", authMiddleware, dislikeBlogPost)
router.put('/:id', authMiddleware, isAdmin, updateBlogPost)
router.get('/:id', getBlogPost)
router.get('/', getAllBlogPosts)
router.delete('/:id', authMiddleware, isAdmin, deleteBlogPost)

module.exports = router