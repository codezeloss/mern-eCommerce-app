const {Schema, model} = require('mongoose')

const CategoryModel = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        index: true
    }
}, {
    timestamps: true
})

const Category = model('Category', CategoryModel)

module.exports = Category