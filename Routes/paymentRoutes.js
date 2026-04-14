// // const express = require("express");
// // const router = express.Router();

// // // Routes
// // router.post("/checkout", (req, res) => {
// //   res.send("Payment checkout working");
// // });

// // module.exports = router;



// var {paymentController} = require("../Controller/paymentController");

// var authMiddleware = require("../Middleware/authMiddleware");
// const router = require("./userRoutes");

// router.post("/checkout",authMiddleware,paymentController);

// module.exports = router


const express = require("express");

var authMiddleware = require("../Middleware/authMiddleware");

var {paymentController} = require("../Controller/paymentController");

var router = express.Router();

router.post("/checkout", authMiddleware, paymentController);

module.exports = router
