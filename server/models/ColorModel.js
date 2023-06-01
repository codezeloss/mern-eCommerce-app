const {Schema, model} = require("mongoose")

const ColorSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        index: true
    }
}, {
    timestamps: true
})

const Color = model('Color', ColorSchema)

module.exports = Color