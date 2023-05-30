const {Schema, model} = require('mongoose')

const BrandSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        index: true
    }
}, {
    timestamps: true
})

const Category = model('Brand', BrandSchema)

module.exports = Category