const {model, Schema} = require("mongoose");
const bcrypt = require('bcrypt')

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
    }
}, {
    timestamps: true
})

// hash password
UserSchema.pre('save', async function (next) {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt)
})

// Compare passwords
UserSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return bcrypt.compareSync(enteredPassword, this.password)
}

const User = model("User", UserSchema)

module.exports = User