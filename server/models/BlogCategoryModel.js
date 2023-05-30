const {Schema, model} = require('mongoose')

const BlogCategorySchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        index: true
    }
}, {
    timestamps: true
})

const Category = model('Blog_Category', BlogCategorySchema)

module.exports = Category