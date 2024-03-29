const { Schema, model } = require("mongoose");

const OrderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    shippingInfos: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      other: {
        type: String,
        required: true,
      },
      zipCode: {
        type: Number,
        required: true,
      },
    },
    paymentInfos: {
      razorPayOrderId: {
        type: String,
        required: true,
      },
      razorPaymentId: {
        type: String,
        required: true,
      },
      paidAt: {
        type: Date,
        default: Date.now(),
      },
    },
    orderItems: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        color: {
          type: Schema.Types.ObjectId,
          ref: "Color",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    month: {
      type: Number,
      default: new Date().getMonth(),
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    totalPriceAfterDiscount: {
      type: Number,
      required: true,
    },
    orderStatus: {
      type: String,
      default: "Ordered",
    },
  },
  {
    timestamps: true,
  }
);

const Order = model("Order", OrderSchema);

module.exports = Order;
