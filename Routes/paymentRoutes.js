

const express = require("express");

var authMiddleware = require("../Middleware/authMiddleware");

var {paymentController} = require("../Controller/paymentController");

var router = express.Router();

router.post("/checkout", authMiddleware, paymentController);

module.exports = router
