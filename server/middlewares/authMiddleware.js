const User = require('../models/UserModel')
const jwt = require("jsonwebtoken")
const asyncHandler = require('express-async-handler')

const authMiddleware = asyncHandler(async (req, res, next) => {
    let token;
    if (req?.headers?.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]

        try {
            const decoded = await jwt.verify(token, process.env.SECRET_KEY)
            req.user = await User.findById(decoded.id)
            next()
        } catch (error) {
            throw new Error("Not authorized, token expired. Please login again.")
        }
    } else {
        throw new Error("There are no token attached to header")
    }
})

const isAdmin = asyncHandler(async (req, res, next) => {
    const {email} = req.user
    const adminUser = await User.findOne({email})
    if(adminUser.role !== "admin") {
        throw new Error("You are not an admin")
    } else {
        next()
    }
})

module.exports = {authMiddleware, isAdmin}