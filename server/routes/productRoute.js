const express = require('express')
const router = express.Router()
const {createProduct, getProduct, getAllProducts, updateProduct, deleteProduct, addToWishList, rating, uploadImages} = require('../controllers/productController')
const {authMiddleware, isAdmin} = require('../middlewares/authMiddleware')
const {uploadPhoto, productImageResize} = require("../middlewares/uploadImages");

router.post("/", authMiddleware, isAdmin, createProduct)
router.put("/upload/:id", authMiddleware, isAdmin, uploadPhoto.array('images', 10), productImageResize, uploadImages)
router.get("/:id", getProduct)
router.put("/wishlist", authMiddleware, addToWishList)
router.put("/rating", authMiddleware, rating)

router.put("/:id", authMiddleware, isAdmin, updateProduct)
router.delete("/:id", authMiddleware, isAdmin, deleteProduct)
router.get("/", getAllProducts)


module.exports = router