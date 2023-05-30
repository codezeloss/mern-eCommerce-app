const {Schema, model} = require('mongoose')

const CouponSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uppercase: true
    },
    expiry: {
        type: Date,
        required: true
    },
    discount: {
        type: Number,
        required: true
    }
})

const Coupon = model('Coupon', CouponSchema)

module.exports = Coupon