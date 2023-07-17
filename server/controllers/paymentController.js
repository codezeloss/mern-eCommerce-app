const Razorpay = require("razorpay");
const dotenv = require("dotenv");
const stripe = require("stripe")("sk_test");
dotenv.config({ path: "./config.env" });

//
const instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

// @desc   Checkout
// @route  POST /
// @access
const checkout = async (req, res) => {
  const { amount } = req.body;

  const option = {
    amount: amount,
    currency: "USD",
  };
  const order = await instance.orders.create(option);
  res.json({
    success: true,
    order,
  });
};

// @desc   Payment Verification
// @route  POST /
// @access
const paymentVerification = async (req, res) => {
  const { razorpayOrderId, razorpayPaymentId } = req.body;
  res.json({ razorpayOrderId, razorpayPaymentId });
};

// @desc   Stripe Payment Checkout
// @route  POST /
// @access
const DOMAIN = "http://localhost:5173";
const stripeCheckout = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "{{PRICE_ID}}",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${DOMAIN}?success=true`,
    cancel_url: `${DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
};

module.exports = {
  checkout,
  paymentVerification,
  stripeCheckout,
};
