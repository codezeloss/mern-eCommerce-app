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
  userCart,
  getUserCart,
  removeProductFromCart,
  updateCartProductQuantity,
  createOrder,
  getMyOrders,
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
router.post("/cart", authMiddleware, userCart);
router.get("/all-users", getAllUsers);
router.get("/cart", authMiddleware, getUserCart);
router.get("/get-my-orders", authMiddleware, getMyOrders);
router.post("/forgot-password-token", forgotPasswordToken);
router.get("/refresh/:id", authMiddleware, isAdmin, handleRefreshToken);
router.get("/:id", authMiddleware, isAdmin, getUser);
router.put("/edit-user", authMiddleware, updateUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.put("/password", authMiddleware, updatePassword);
router.put("/reset-password/:token", resetPassword);
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
router.post("/cart/create-order", authMiddleware, createOrder);
router.post("/order/checkout", authMiddleware, checkout);
router.post("/order/paymentVerification", authMiddleware, paymentVerification);
router.post("/create-checkout-session", authMiddleware, stripeCheckout);

module.exports = router;

{
  /*
  router.post("/cart/apply-coupon", authMiddleware, applyCoupon);
  router.get("/orders", authMiddleware, isAdmin, getAllOrders);
  router.get("/user-orders/:id", authMiddleware, isAdmin, getOrderByUserId);
  router.put("/order/update-order/:id", authMiddleware, isAdmin, updateOrder);
  router.delete("/empty-cart", authMiddleware, emptyCart);
  */
}
