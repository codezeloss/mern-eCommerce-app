const Blog = require('../models/BlogModel')
const User = require('../models/UserModel')
const asyncHandler = require('express-async-handler')
const validateMongodbId = require('../utils/validateMongodbId')


// @desc   Create a Blog Post
// @route  POST /
// @access
const createBlogPost = asyncHandler(async (req, res) => {
    try {
        const blogPost = await Blog.create(req.body)
        res.json(blogPost)
    } catch (error)  {
        throw new Error(error)
    }
})

// @desc   Update a Blog Post
// @route  PUT /:id
// @access
const updateBlogPost = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongodbId(id)

    try {
        const blogPost = await Blog.findByIdAndUpdate(id, req.body, {new: true})
        res.json(blogPost)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Get a Blog Post
// @route  GET /:id
// @access
const getBlogPost = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongodbId(id)

    try {
        const blogPost = await Blog.findById(id)
        const updateViews = await Blog.findByIdAndUpdate(id, {$inc: {numViews: 1}}, {new: true})
        res.json(blogPost)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Get all Blog Posts
// @route  GET /
// @access
const getAllBlogPosts = asyncHandler(async (req, res) => {
    try {
        const posts = await Blog.find()
        res.json(posts)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Delete a Blog Post
// @route  DELETE /:id
// @access
const deleteBlogPost = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongodbId(id)

    try {
        const blogPost = await Blog.findByIdAndDelete(id)
        res.json(blogPost.id)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Like a Blog Post
// @route  DELETE /:id
// @access
const likeBlogPost = asyncHandler(async (req, res) => {
    const {blogId} = req.body
    validateMongodbId(blogId)

    // Find the blog post that will be liked
    const blogPost = await Blog.findById(blogId)

    // Find the ID of the logged-In user
    const loggedUserId = req?.user?._id

    // Find if the user has liked the post
    const isLiked = blogPost?.isLiked

    // Find if the user has disliked the post
    const alreadyDisliked = blog?.dislikes?.find({userId: userId?.toString() === loggedUserId?.toString()})

    if(alreadyDisliked) {
        const blogPost = await Blog.findByIdAndUpdate(blogId, {
            $pull: {dislikes: loggedUserId},
            isDisliked: false
        })
    }


})

module.exports = {
    createBlogPost,
    updateBlogPost,
    getBlogPost,
    getAllBlogPosts,
    deleteBlogPost,
    likeBlogPost
}