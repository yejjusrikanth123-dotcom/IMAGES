

var express = require("express")
const { 
    getProfile, 
    updateProfile, 
    createProfile, 
    deleteProfile 
} = require("../Controller/profileController")

const authMiddleware = require("../Middleware/authMiddleware")

var router = express.Router()

// GET profile
router.get("/profile/:id", getProfile)

// POST (create profile)
router.post("/profile",authMiddleware, createProfile)

// PUT (update profile)
router.put("/updateprofile/:id", authMiddleware, updateProfile)

// DELETE (delete profile)
router.delete("/deleteprofile/:id", authMiddleware,deleteProfile)

module.exports = router
