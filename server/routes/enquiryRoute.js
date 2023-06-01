const express = require('express')
const router = express.Router()
const {createEnquiry, updateEnquiry, deleteEnquiry, getEnquiry, getAllEnquiries} = require("../controllers/enquiryController");
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware");

router.post("/", createEnquiry)
router.put("/:id", authMiddleware, isAdmin, updateEnquiry)
router.delete("/:id", authMiddleware, isAdmin, deleteEnquiry)
router.get("/:id", getEnquiry)
router.get("/", getAllEnquiries)

module.exports = router