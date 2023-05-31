const {Schema, model} = require('mongoose')

const CartSchema = new Schema({
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
                },
                price: {
                    type: Number
                }
            }
        ],
        cartTotal: {
            type: Number
        },
        totalAfterDiscount: {
            type: Number
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

const Cart = model('Cart', CartSchema)

module.exports = Cart