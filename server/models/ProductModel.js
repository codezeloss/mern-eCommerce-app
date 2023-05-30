const {model, Schema} = require("mongoose");

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    sold: {
        type: Number,
        default: 0,
        select: false
    },
    images: {
        type: Array
    },
    color: {
        type: String,
        required: true
    },
    ratings: [
        {
            star: Number,
            comment: String,
            postedBy: { type: Schema.Types.ObjectId, ref: "User" },
        },
    ],
    totalRating: {
        type: String,
        default: 0
    }
}, {
    timestamps: true
})

const Product = model("Product", ProductSchema)

module.exports = Product