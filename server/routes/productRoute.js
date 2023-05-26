const express = require('express')
const router = express.Router()
const {createProduct, getProduct, getAllProducts, updateProduct, deleteProduct} = require('../controllers/productController')
const {authMiddleware, isAdmin} = require('../middlewares/authMiddleware')

router.post("/", authMiddleware, isAdmin, createProduct)
router.get("/", getAllProducts)
router.get("/:id", getProduct)
router.put("/:id", authMiddleware, isAdmin, updateProduct)
router.delete("/:id", authMiddleware, isAdmin, deleteProduct)


module.exports = router