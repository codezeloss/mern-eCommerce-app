const {Schema, model} = require('mongoose')

const ProductCategorySchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        index: true
    }
}, {
    timestamps: true
})

const Category = model('Product_Category', ProductCategorySchema)

module.exports = Category