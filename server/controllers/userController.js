const User = require('../models/UserModel')
const asyncHandler = require('express-async-handler')
const {generateToken} = require("../config/jwtToken")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const validateMongodbId = require('../utils/validateMongodbId')
const generateRefreshToken = require('../config/refreshToken')
const sendEmail = require("./emailController")
const crypto = require("crypto");

// @desc   Create a new User
// @route  POST /register
// @access Private
const createUser = asyncHandler(async (req, res) => {
    const {firstname, lastname, email, phone, password} = req.body

    const user = await User.findOne({email})

    if(!user) {
        // Create new user
        const newUser = await User.create(req.body)
        res.json(newUser)
    } else {
        // User already exists
        throw new Error('User already exists')
    }
})

// @desc   Login a user
// @route  POST /login
// @access Private
const loginUser = async (req, res) => {
    const {email, password} = req.body

    // Check if user exist or not
    const foundUser = await User.findOne({email})

    if (!foundUser) {
        res.status(404).json("User not found!");
        return;
    }

    // Check if the password is correct
    // BCRYPT
    const comparedPassword = bcrypt.compareSync(password, foundUser.password)

    if (comparedPassword) {
        const refreshToken = await generateRefreshToken(foundUser._id)

        const user = await User.findByIdAndUpdate(foundUser.id, {
            refreshToken: refreshToken
        }, {
            new: true
        })

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000
        })

        res.json({
            id: user?._id,
            firstname: user?.firstname,
            lastname: user?.lastname,
            email: user?.email,
            mobile: user?.mobile,
            token: generateToken(user?._id),
        });

    } else {
        res.status(404).json("Incorrect Password");
    }
}

// @desc   Handle refresh token
// @route  GET /refresh/:id
// @access Private
const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in cookies")

    const refreshToken = cookie.refreshToken

    const user = await User.findOne({refreshToken})
    if(!user) throw new Error("No refresh token found in DB or not matched")

    // JWT
    await jwt.verify(refreshToken, process.env.SECRET_KEY, {}, async (err, info) => {
        if (err || user.id !== info.id) {
            throw new Error("There is something wrong with refresh token!!")
        }
        const accessToken = generateToken(user?._id)
        res.json({ accessToken });
    });
})

// @desc   Logout a user
// @route  POST /logout
// @access
const logoutUser = asyncHandler(async (req, res) => {
    const cookie = req.cookies
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in cookies")

    const refreshToken = cookie.refreshToken

    const user = await User.findOne({refreshToken})
    if(!user) {
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: true
        })
        return res.sendStatus(204) // forbidden
    }

    await User.findOneAndUpdate({refreshToken}, {
        refreshToken: ""
    })
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: true
    })
    return res.sendStatus(204) // forbidden
})

// @desc   Get all users
// @route  GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Get a user
// @route  GET /:id
// @access Private
const getUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongodbId(id)

    try {
        const user = await User.findById(id)
        res.json(user)
    } catch (error) {
        throw new Error(error)
    }

})

// @desc   Delete a user
// @route  DELETE /:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongodbId(id)

    try {
        const user = await User.findByIdAndDelete(id)
        res.json(user)
    } catch (error) {
        throw new Error(error)
    }

})

// @desc   Update a user
// @route  PUT /:id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
    const { id } = req.user
    validateMongodbId(id)

    const {firstname, lastname, email, phone} = req.body

    try {
        const user = await User.findByIdAndUpdate(id, {
            firstname, lastname, email, phone
        }, {new: true})
        res.json(user)
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Block a user
// @route  PUT /block-user/:id
// @access Private
const blockUser = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongodbId(id)

    try {
        const user = await User.findByIdAndUpdate(id, {isBlocked: true}, {new: true})
        res.json({
            message: "User blocked"
        })
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Unblock a user
// @route  PUT /unblock-user/:id
// @access Private
const unblockUser = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongodbId(id)

    try {
        const user = await User.findByIdAndUpdate(id, {isBlocked: false}, {new: true})
        res.json({
            message: "User unblocked"
        })
    } catch (error) {
        throw new Error(error)
    }
})

// @desc   Update User Password
// @route  PUT /password
// @access Private
const updatePassword = asyncHandler(async (req, res) => {
    const {_id} = req.user
    const {password} = req.body
    validateMongodbId(_id)

    const user = await User.findById(_id)

    if(password) {
        user.password = password
        const updatedPassword = await user.save()
        res.json(updatedPassword)
    } else {
        res.json(user)
    }
})

// @desc   Forgot Password token
// @route  POST /forgot-password-token
// @access Private
const forgotPasswordToken = asyncHandler(async (req, res) => {
    const {email} = req.body
    const user = await User.findOne({email})
    if(!user) throw new Error("User not found with this email!")

    try {
        const token = await user.createPasswordResetToken()
        await user.save()
        const resetURL = `Hi! Please follow this link to reset your password. This link is valid till 10 mins from now. <a href='http://localhost:4000/api/user/reset-password/${token}'>Click here</a>`
        const data = {
            to: email,
            text: "Hey user!",
            subject: "Forgot password link",
            html: resetURL,
        }
        sendEmail(data)
        res.json(token)
    } catch (error) {50
        throw new Error(error)
    }
})

// @desc   Reset Password
// @route  PUT /reset-password/:token
// @access Private
const resetPassword = asyncHandler(async (req, res) => {
    const {password} = req.body
    const {token} = req.params
    const hashedToken = crypto.createHash("sha256").update(token).digest('hex')

    const user = await User.findOne({ passwordResetToken: hashedToken, passwordResetExpires: {$gt: Date.now() }})

    if(!user) throw new Error("Token Expired. Please try again later!")
    user.password = password
    user.passwordResetToken = undefined
    user.passwordResetExpires = undefined

    await user.save()
    res.json(user)
})

module.exports = {
    createUser,
    loginUser,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser,
    blockUser,
    unblockUser,
    handleRefreshToken,
    logoutUser,
    updatePassword,
    forgotPasswordToken,
    resetPassword}