const {Schema, model} = require('mongoose')

const OrderSchema = new Schema({
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: "Product"
            },
            count: {
                type: Number
            },
            color: {
                type: String
            }
        }
    ],
    paymentIntent: {},
    orderStatus: {
        type: String,
        default: "Not Processed",
        enum: ["Not Processed", "Processed", "Cash on Delivery", "Processing", "Dispatched", "Cancelled", "Delivered"]
    },
    orderBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, 
    {
    timestamps: true
    }
)

const Order = model('Order', OrderSchema)

module.exports = Order