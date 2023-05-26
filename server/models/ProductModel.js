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
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    brand: {
        type: String,
        enum: ["Apple", "Samsung", "Lenovo"]
    },
    quantity: {
        type: Number,
    },
    sold: {
        type: Number,
        default: 0
    },
    images: {
        type: Array
    },
    color: {
        type: String,
        enum: ["Black", "Brown", "Red"]
    },
    ratings: [
        {
            type: Number,
            postedBy: {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        }
    ]
}, {
    timestamps: true
})

const Product = model("Product", ProductSchema)

module.exports = Product