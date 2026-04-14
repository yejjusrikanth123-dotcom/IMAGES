// var Cart = require("../Model/orderModel")

// var Product = require("../Model/ProductModel")

// var razorpay = require("../config/razorpay")


// var paymentController = async(req,res)=>{
    
//     try{
//         var userId = req.user.id 
//         var order = await Order.find({userId})
//         res.status(200).json({
//             message : "orders fetched successfully",
//             data: order
//         })
//     }catch(error){
//         console.log("error",error);
//         res.status(500).json({
//             message : "Internal server error",
//     })
// }

//     var paymentController = async(req,res)=>{
//         try{
//             var userID = req.user.id
//             var cart = await Cart.findOne({userId })

        
    
//         if(!cart || !Cart.items .length === 0){
//             return res.status(200).json({
//                 message : "cart is empty"
//             })
//         }

//         var totalAmount = 0 

//         for(var item of cart.items){
//             var product = await Product.findById(item.product)
           
//             totalAmount += product.price * item.quantity
//         }

//         var order = await razorpay.orders.create({
//             amount : totalAmount*100,
//             currency : "INR"

//         })
//         res.status(200).json({
//             message : "checkout created",order,totalAmount
//         })




//     }catch(error){
//         console.log("error",error);
//         res.status(500).json({ "message": "internal server error"})
            
            
        
//     }
//     }
// }

// module.exports = {
//     paymentController 
// }



var Cart = require("../Model/cartModel")
var Product = require("../Model/ProductModel")
var razorpay = require("../config/razorpay")


var paymentController = async (req, res) => {
    try {
       var userId = req.user.userId   // ✅ fix
var cart = await Cart.findOne({ userId })
console.log(req.user)


        if (!cart || cart.items.length === 0) {
            return res.status(200).json({
                message: "cart is empty"
            })
        }

        var totalAmount = 0

        for (var item of cart.items) {
            var product = await Product.findById(item.product)
            totalAmount += product.price * item.quantity
        }

        var order = await razorpay.orders.create({
            amount: totalAmount * 100,
            currency: "INR"
        })

        res.status(200).json({
            message: "checkout created",
            order,
            totalAmount
        })

    } catch (error) {
        console.log("error", error)
        res.status(500).json({
            message: "internal server error"
        })
    }
}

module.exports = {
    paymentController
}



