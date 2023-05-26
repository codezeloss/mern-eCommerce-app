const User = require('../models/UserModel')
const asyncHandler = require('express-async-handler')
const {generateToken} = require("../config/jwtToken")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

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
    const user = await User.findOne({email})

    if (!user) {
        res.status(404).json("User not found!");
        return;
    }

    // Check if the password is correct
    // BCRYPT
    const comparedPassword = bcrypt.compareSync(password, user.password);
    if (comparedPassword) {
        // JWT (Generate a $$ TOKEN)
        await jwt.sign(
            { id: user._id },
            process.env.SECRET_KEY,
            {expiresIn: "3d"},
            function (err, token) {
                if (err) throw err;
                res.cookie("token", token).json({ id: user._id, firstname: user.firstname, lastname: user.lastname, email: user.email, mobile: user.mobile, token });
            }
        );
    } else {
        res.status(404).json("Incorrect Password");
    }
}

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
    const {id} = req.params

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
    const {id} = req.params
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

module.exports = {createUser, loginUser,getAllUsers, getUser, deleteUser, updateUser}