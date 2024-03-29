const User = require("../models/UserModel");
const Product = require("../models/ProductModel");
const Cart = require("../models/CartModel");
const Coupon = require("../models/CouponModel");
const Order = require("../models/OrderModel");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validateMongodbId = require("../utils/validateMongodbId");
const generateRefreshToken = require("../config/refreshToken");
const sendEmail = require("./emailController");
const crypto = require("crypto");
const uniqid = require("uniqid");

// @desc   Create a new User
// @route  POST /register
// @access Private
const createUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, mobile, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    // Create new user
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    // User already exists
    throw new Error("User already exists");
  }
});

// @desc   Login a user
// @route  POST /login
// @access Private
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check if user exist or not
  const foundUser = await User.findOne({ email });

  if (!foundUser) {
    throw new Error("Invalid Credentials");
    return;
  }

  // Check if the password is correct
  // BCRYPT
  const comparedPassword = bcrypt.compareSync(password, foundUser.password);

  if (comparedPassword) {
    const refreshToken = await generateRefreshToken(foundUser._id);

    const user = await User.findByIdAndUpdate(
      foundUser.id,
      {
        refreshToken: refreshToken,
      },
      {
        new: true,
      }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });

    res.json({
      id: user?._id,
      firstname: user?.firstname,
      lastname: user?.lastname,
      email: user?.email,
      mobile: user?.mobile,
      token: generateToken(user?._id),
    });
  } else {
    res.status(404).json("Incorrect Password");
  }
});

// @desc   Login an Admin
// @route  POST /login
// @access Private
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check if user exist or not
  const foundAdmin = await User.findOne({ email });

  if (!foundAdmin) {
    res.status(404).json("User not found!");
    return;
  }

  if (foundAdmin.role !== "admin") throw new Error("Not authorized");

  // Check if the password is correct
  // BCRYPT
  const comparedPassword = bcrypt.compareSync(password, foundAdmin.password);

  if (comparedPassword) {
    const refreshToken = await generateRefreshToken(foundAdmin._id);

    const user = await User.findByIdAndUpdate(
      foundAdmin.id,
      {
        refreshToken: refreshToken,
      },
      {
        new: true,
      }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });

    res.json({
      id: user?._id,
      firstname: user?.firstname,
      lastname: user?.lastname,
      email: user?.email,
      mobile: user?.mobile,
      token: generateToken(user?._id),
    });
  } else {
    res.status(404).json("Incorrect Password");
  }
});

// @desc   Handle refresh token
// @route  GET /refresh/:id
// @access Private
const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in cookies");

  const refreshToken = cookie.refreshToken;

  const user = await User.findOne({ refreshToken });
  if (!user) throw new Error("No refresh token found in DB or not matched");

  // JWT
  await jwt.verify(
    refreshToken,
    process.env.SECRET_KEY,
    {},
    async (err, info) => {
      if (err || user.id !== info.id) {
        throw new Error("There is something wrong with refresh token!!");
      }
      const accessToken = generateToken(user?._id);
      res.json({ accessToken });
    }
  );
});

// @desc   Logout a user
// @route  POST /logout
// @access
const logoutUser = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in cookies");

  const refreshToken = cookie.refreshToken;

  const user = await User.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    return res.sendStatus(204); // forbidden
  }

  await User.findOneAndUpdate(
    { refreshToken },
    {
      refreshToken: "",
    }
  );
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  return res.sendStatus(204); // forbidden
});

// @desc   Save user Address
// @route  PUT /save-address
// @access Private
const saveAddress = asyncHandler(async (req, res, next) => {
  const { id } = req.user;
  validateMongodbId(id);

  const { address } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        address,
      },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Get all users
// @route  GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Get a user
// @route  GET /:id
// @access Private
const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Delete a user
// @route  DELETE /:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const user = await User.findByIdAndDelete(id);
    res.json(user);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Update a user
// @route  PUT /:id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.user;
  validateMongodbId(id);

  const { firstname, lastname, email, mobile } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        firstname,
        lastname,
        email,
        mobile,
      },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Block a user
// @route  PUT /block-user/:id
// @access Private
const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { isBlocked: true },
      { new: true }
    );
    res.json({
      message: "User blocked",
    });
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Unblock a user
// @route  PUT /unblock-user/:id
// @access Private
const unblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { isBlocked: false },
      { new: true }
    );
    res.json({
      message: "User unblocked",
    });
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Update User Password
// @route  PUT /password
// @access Private
const updatePassword = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  validateMongodbId(_id);

  const user = await User.findById(_id);

  if (password) {
    user.password = password;
    const updatedPassword = await user.save();
    res.json(updatedPassword);
  } else {
    res.json(user);
  }
});

// @desc   Forgot Password token
// @route  POST /forgot-password-token
// @access Private
const forgotPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found with this email!");

  try {
    const token = await user.createPasswordResetToken();
    await user.save();
    const resetURL = `Hi! Please follow this link to reset your password. This link is valid till 10 mins from now. <a href="http://localhost:5173/account/reset-password/${token}">Click here</a>`;
    const data = {
      to: email,
      text: "Hey!",
      subject: "Forgot password link",
      html: resetURL,
    };
    sendEmail(data);
    res.json(token);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Reset Password
// @route  PUT /reset-password/:token
// @access Private
const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) throw new Error("Token Expired. Please try again later!");
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  await user.save();
  res.json(user);
});

// @desc   Get the wishlist
// @route  GET /wishlist
// @access Private
const getWishlist = asyncHandler(async (req, res) => {
  const { id } = req.user;

  try {
    const user = await User.findById(id).populate("wishlist");
    res.json(user);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   User CartPage
// @route  POST /cart
// @access Private
const addToCart = asyncHandler(async (req, res) => {
  const { productId, color, quantity, price } = req.body;
  const { id } = req.user;

  try {
    let newCart = await new Cart({
      userId: id,
      productId,
      color,
      price,
      quantity,
    }).save();
    res.json(newCart);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   User CartPage
// @route  GET /cart
// @access Private
const getUserCart = asyncHandler(async (req, res) => {
  const { id } = req.user;

  try {
    const cart = await Cart.find({ userId: id })
      .populate("productId")
      .populate("color");
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Remove Product from User Cart
// @route  DELETE /delete-cart-product
// @access Private
const removeProductFromCart = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const { cartItemId } = req.params;
  validateMongodbId(id);

  try {
    const deletedProductFromCart = await Cart.findOneAndDelete(cartItemId);
    res.json(deletedProductFromCart);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Update Product Quantity
// @route  PUT /update-product-quantity
// @access Private
const updateCartProductQuantity = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const { cartItemId, newQuantity } = req.params;
  validateMongodbId(id);

  try {
    const cartItem = await Cart.findOne({
      userId: id,
      _id: cartItemId,
    });
    cartItem.quantity = newQuantity;
    cartItem.save();
    res.json(cartItem);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Create Order
// @route  POST /cart/create-order
// @access Private
const createOrder = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const {
    shippingInfos,
    orderItems,
    totalPrice,
    totalPriceAfterDiscount,
    paymentInfos,
  } = req.body;

  try {
    const order = await Order.create({
      shippingInfos,
      orderItems,
      totalPrice,
      totalPriceAfterDiscount,
      paymentInfos,
      user: id,
    });
    res.json({
      success: true,
      order,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Get User Orders
// @route  GET /get-my-orders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
  const { id } = req.user;

  try {
    const orders = await Order.find({ user: id })
      .populate("user")
      .populate("orderItems.product")
      .populate("orderItems.color");
    res.json(orders);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Get All Orders
// @route  GET /orders
// @access Private
const getAllOrders = asyncHandler(async (req, res) => {
  try {
    const orders = await Order.find().populate("user");
    res.json(orders);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Get Single Order
// @route  GET /order/:id
// @access Private
const getSingleOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const orders = await Order.findOne({ _id: id })
      .populate("orderItems.product")
      .populate("user")
      .populate("orderItems.color");
    res.json(orders);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Update Order
// @route  PUT /update-order/:id
// @access Private
const updateOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const orders = await Order.findByIdAndUpdate(
      id,
      { orderStatus: req.body.status },
      { new: true }
    );
    await orders.save();
    res.json(orders);
  } catch (error) {
    throw new Error(error);
  }
});

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// @desc   Get Monthly Orders Income
// @route  GET /total-orders
// @access Private
const getMonthWiseOrderIncome = asyncHandler(async (req, res) => {
  let date = new Date();
  let endDate = "";

  date.setDate(1);

  for (let i = 0; i < 11; i++) {
    date.setMonth(date.getMonth() - 1);
    endDate = months[date.getMonth()] + " " + date.getFullYear();
  }

  const data = await Order.aggregate([
    {
      $match: {
        createdAt: {
          $lte: new Date(),
          $gte: new Date(endDate),
        },
      },
    },
    {
      $group: {
        _id: {
          month: "$month",
        },
        amount: { $sum: "$totalPriceAfterDiscount" },
        count: { $sum: 1 },
      },
    },
  ]);
  res.json(data);
});

// @desc   Get Yearly Total Orders
// @route  GET /yearly-income
// @access Private
const getYearlyTotalOrders = asyncHandler(async (req, res) => {
  let date = new Date();
  let endDate = "";

  date.setDate(1);

  for (let i = 0; i < 11; i++) {
    date.setMonth(date.getMonth() - 1);
    endDate = months[date.getMonth()] + " " + date.getFullYear();
  }

  const data = await Order.aggregate([
    {
      $match: {
        createdAt: {
          $lte: new Date(),
          $gte: new Date(endDate),
        },
      },
    },
    {
      $group: {
        _id: "$month",
        count: { $sum: 1 },
        amount: { $sum: "$totalPriceAfterDiscount" },
      },
    },
  ]);
  res.json(data);
});

// @desc   Get Order By User ID
// @route  POST /orders-by-user
// @access Private
const getOrderByUserId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const userOrders = await Order.findOne({ orderBy: id })
      .populate("product.product")
      .populate("orderBy")
      .exec();
    res.json(userOrders);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createUser,
  loginUser,
  loginAdmin,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logoutUser,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  getWishlist,
  saveAddress,
  addToCart,
  getUserCart,
  removeProductFromCart,
  updateCartProductQuantity,
  createOrder,
  getMyOrders,
  getMonthWiseOrderIncome,
  getYearlyTotalOrders,
  getOrderByUserId,
  getAllOrders,
  getSingleOrder,
  updateOrder,
};

{
  /*
  // @desc   Empty CartPage
  // @route  DELETE /empty-cart
  // @access Private
  const emptyCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongodbId(_id);

    try {
      const user = await User.findOne({ _id });
      const cart = await Cart.findOneAndRemove({ orderBy: user._id });
      res.json(cart);
    } catch (error) {
      throw new Error(error);
    }
  });

  // @desc   Apply Coupon
  // @route  POST /cart/apply-coupon
  // @access Private
  const applyCoupon = asyncHandler(async (req, res) => {
    const { coupon } = req.body;
    const { _id } = req.user;
    validateMongodbId(_id);

    // Check if the Coupon is VALID
    const validCoupon = await Coupon.findOne({ name: coupon });
    if (validCoupon === null) {
      throw new Error("Invalid Coupon");
    }

    const user = await User.findOne({ _id });
    let { cartTotal } = await Cart.findOne({ orderBy: user._id }).populate(
      "product.product"
    );

    // Calculate the TOTAL after Discount
    let totalAfterDiscount = (
      cartTotal -
      (cartTotal * validCoupon.discount) / 100
    ).toFixed(2);

    // Update
    await Cart.findOneAndUpdate(
      { orderBy: user._id },
      { totalAfterDiscount },
      { new: true }
    );
    res.json(totalAfterDiscount);
  });

  // @desc   Create an Order
  // @route  POST /cart/cash-order
  // @access Private
  const createOrder = asyncHandler(async (req, res) => {
    const { COD, couponApplied } = req.body;
    const { _id } = req.user;
    validateMongodbId(_id);

    try {
      if (!COD) throw new Error("Create cash order failed");

      const user = await User.findById(_id);
      let userCart = await Cart.findOne({ orderBy: user._id });

      // Final Amount
      let finalAmount = 0;
      if (couponApplied && userCart.totalAfterDiscount) {
        finalAmount = userCart.totalAfterDiscount * 100;
      } else {
        finalAmount = userCart.cartTotal * 100;
      }

      // Create the new Order
      let newOrder = await new Order({
        products: userCart.products,
        paymentIntent: {
          id: uniqid(),
          method: "COD",
          amount: finalAmount,
          status: "Cash on Delivery",
          created: Date.now(),
          currency: "usd",
        },
        orderBy: user._id,
        orderStatus: "Cash on Delivery",
      }).save();

      //
      let update = userCart.products.map((item) => {
        return {
          updateOne: {
            filter: { _id: item.product._id },
            update: { $inc: { quantity: -item.count, sold: +item.count } },
          },
        };
      });

      const updated = await Product.bulkWrite(update, {});
      res.json({ message: "success" });
    } catch (error) {
      throw new Error(error);
    }
  });

  // @desc   Get All Orders
  // @route  GET /all-orders
  // @access Private
  const getAllOrders = asyncHandler(async (req, res) => {
    try {
      const orders = await Order.find()
        .populate("product.product")
        .populate("orderBy")
        .exec();
      res.json(orders);
    } catch (error) {
      throw new Error(error);
    }
  });



  // @desc   Update Order Status
  // @route  PUT /order/update-order/:id
  // @access Private
  const updateOrder = asyncHandler(async (req, res) => {
    const { status } = req.body;
    const { id } = req.params;
    validateMongodbId(id);

    try {
      const order = await Order.findByIdAndUpdate(
        id,
        {
          orderStatus: status,
          paymentIntent: {
            status,
          },
        },
        { new: true }
      );
      res.json(order);
    } catch (error) {
      throw new Error(error);
    }
  });
*/
}

{
  /*
  emptyCart,
  applyCoupon,
  createOrder,
  getAllOrders,
  getOrderByUserId,
  updateOrder,
*/
}
