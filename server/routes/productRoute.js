const express = require('express')
const router = express.Router()
const {
    createProduct,
    getProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    addToWishList,
    rating,
    uploadImages,
    deleteImages
} = require('../controllers/productController')
const {authMiddleware, isAdmin} = require('../middlewares/authMiddleware')
const {uploadPhoto, productImageResize} = require("../middlewares/uploadImages");

router.post("/", authMiddleware, isAdmin, createProduct)
router.put("/upload", authMiddleware, isAdmin, uploadPhoto.array('images', 10), productImageResize, uploadImages)
router.get("/:id", getProduct)
router.put("/wishlist", authMiddleware, addToWishList)
router.put("/rating", authMiddleware, rating)
router.put("/:id", authMiddleware, isAdmin, updateProduct)
router.delete("/:id", authMiddleware, isAdmin, deleteProduct)
router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages)
router.get("/", getAllProducts)


module.exports = router