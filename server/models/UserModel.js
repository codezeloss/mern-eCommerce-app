const {model, Schema} = require("mongoose");
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user"
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    cart: {
        type: Array,
        default: []
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: "Address"
    },
    wishlist: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    refreshToken: {
        type: String
    },
    passwordChangedAt: {
        type: Date
    },
    passwordResetToken: {
        type: String
    },
    passwordResetExpires: {
        type: Date
    },
}, {
    timestamps: true
})

// hash password
UserSchema.pre('save', async function (next) {
    if(!this.isModified("password")) {
        next()
    }

    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt)
})

// Compare passwords
UserSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return bcrypt.compareSync(enteredPassword, this.password)
}

// Generate Password Reset Token
UserSchema.methods.createPasswordResetToken = async function () {
    const resetToken = crypto.randomBytes(32).toString('hex')
    this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex")
    this.passwordResetExpires = Date.now() + 30 * 60 * 1000 // 10 mins
    return resetToken
}

const User = model("User", UserSchema)

module.exports = User