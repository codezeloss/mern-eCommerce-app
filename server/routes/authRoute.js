const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
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
  loginAdmin,
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
} = require("../controllers/userController");
const {
  checkout,
  paymentVerification,
  stripeCheckout,
} = require("../controllers/paymentController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/login-admin", loginAdmin);
router.post("logout", logoutUser);
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/cart", authMiddleware, getUserCart);
router.post("/cart", authMiddleware, addToCart);
router.get("/all-users", getAllUsers);
router.get("/get-my-orders", authMiddleware, getMyOrders);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/edit-user", authMiddleware, updateUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/password", authMiddleware, updatePassword);
router.put("/reset-password/:token", resetPassword);
router.get("/wise-order-income", authMiddleware, getMonthWiseOrderIncome);
router.get("/yearly-income", authMiddleware, getYearlyTotalOrders);
router.delete(
  "/update-product-quantity/:cartItemId/:newQuantity",
  authMiddleware,
  updateCartProductQuantity
);
router.delete(
  "/delete-cart-product/:cartItemId",
  authMiddleware,
  removeProductFromCart
);
router.delete("/:id", deleteUser);
router.get("/orders", authMiddleware, isAdmin, getAllOrders);
router.get("/order/:id", authMiddleware, isAdmin, getSingleOrder);
router.post("/cart/create-order", authMiddleware, createOrder);
router.put("/update-order/:id", authMiddleware, isAdmin, updateOrder);
router.post("/order/checkout", authMiddleware, checkout);
router.post("/order/paymentVerification", authMiddleware, paymentVerification);
router.post("/create-checkout-session", authMiddleware, stripeCheckout);
router.get("/refresh/:id", authMiddleware, isAdmin, handleRefreshToken);
router.get("/:id", authMiddleware, isAdmin, getUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.get("/user-orders/:id", authMiddleware, isAdmin, getOrderByUserId);

module.exports = router;

{
  /*
  router.post("/cart/apply-coupon", authMiddleware, applyCoupon);

  router.put("/order/update-order/:id", authMiddleware, isAdmin, updateOrder);
  router.delete("/empty-cart", authMiddleware, emptyCart);
  */
}
