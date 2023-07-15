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
  emptyCart,
  applyCoupon,
  createOrder,
  getAllOrders,
  updateOrder,
  getOrderByUserId,
  removeProductFromCart,
  updateCartProductQuantity,
} = require("../controllers/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/login-admin", loginAdmin);
router.get("/wishlist", authMiddleware, getWishlist);
router.post("/cart", authMiddleware, userCart);
router.get("/cart", authMiddleware, getUserCart);
router.post("/cart/apply-coupon", authMiddleware, applyCoupon);
router.post("/cart/cash-order", authMiddleware, createOrder);
router.get("/all-users", getAllUsers);
router.get("/orders", authMiddleware, isAdmin, getAllOrders);
router.get("/user-orders/:id", authMiddleware, isAdmin, getOrderByUserId);
router.post("logout", logoutUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.get("/refresh/:id", authMiddleware, isAdmin, handleRefreshToken);
router.get("/:id", authMiddleware, isAdmin, getUser);
router.put("/order/update-order/:id", authMiddleware, isAdmin, updateOrder);
router.put("/edit-user/:id", authMiddleware, updateUser);
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
router.delete("/empty-cart", authMiddleware, emptyCart);
router.delete("/:id", deleteUser);
module.exports = router;
