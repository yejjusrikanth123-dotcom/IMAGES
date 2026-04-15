// var express = require("express")
// const { getCart, addToCart } = require("../Controller/cartController")
// const authMiddleware = require("../Middleware/authMiddleware")


// var router = express.Router()


// router.get("/cart",authMiddleware,getCart)

// router.post("/addcart",authMiddleware,addToCart)

// module.exports = router 



const express = require("express");
const router = express.Router();

// Import controllers
const { getCart, addToCart } = require("../Controller/cartController");

// Import middleware
const authMiddleware = require("../Middleware/authMiddleware");

// Routes
router.get("/cart", authMiddleware, getCart);
router.post("/cart", authMiddleware, addToCart); // changed endpoint for consistency

module.exports = router;