// var Cart = require("../Model/cartModel")

// // ===================
// // GET CART
// // ===================
// var getCart = async (req, res) => {
//     try {
//         var userId = req.user.id
//         var cart = await Cart.findOne({ userId })

//         res.status(200).json({ cart })

//     } catch (error) {
//         console.log("error", error)
//         res.status(500).json({ error: "server error" })
//     }
// }


// // ===================
// // ADD TO CART
// // ===================
// var addToCart = async (req, res) => {
//     try {
//         var userId = req.user.id
//         var { productId } = req.body

//         var cart = await Cart.findOne({ userId })

//         // 🟢 If cart does not exist → create & return
//         if (!cart) {
//             cart = await Cart.create({
//                 userId,
//                 items: [
//                     {
//                         product: productId,
//                         quantity: 1
//                     }
//                 ]
//             })

//             return res.status(201).json({
//                 message: "cart created",
//                 data: cart
//             })
//         }

//         // 🟢 If cart exists → update
//         var existingItem = cart.items.find(
//             item => item.product == productId
//         )

//         if (existingItem) {
//             existingItem.quantity += 1
//         } else {
//             cart.items.push({
//                 product: productId,
//                 quantity: 1
//             })
//         }

//         await cart.save()

//         return res.status(200).json({
//             message: "cart updated",
//             data: cart
//         })

//     } catch (error) {
//         console.log("error", error)
//         res.status(500).json({ error: "server error" })
//     }
// }

// module.exports = {
//     getCart,
//     addToCart
// }



// var Cart = require("../Model/cartModel")

// // ===================
// // GET CART
// // ===================
// var getCart = async (req, res) => {
//     try {
//         var userId = req.user.id
//         var cart = await Cart.findOne({ userId })

//         res.status(200).json({ cart })

//     } catch (error) {
//         console.log("error", error)
//         res.status(500).json({ error: "server error" })
//     }
// }


// // ===================
// // ADD TO CART
// // ===================
// var addToCart = async (req, res) => {
//     try {
//         var userId = req.user.id
//         var { productId } = req.body

//         var cart = await Cart.findOne({ userId })

//         // 🟢 If cart does not exist → create
//         if (!cart) {
//             cart = await Cart.create({
//                 userId,
//                 items: [
//                     {
//                         product: productId,
//                         quantity: 1
//                     }
//                 ]
//             })

//             return res.status(201).json({
//                 message: "cart created",
//                 data: cart
//             })
//         }

//         // 🟢 If cart exists → update
//         var existingItem = cart.items.find(
//             item => item.product.toString() === productId
//         )

//         if (existingItem) {
//             existingItem.quantity += 1
//         } else {
//             cart.items.push({
//                 product: productId,
//                 quantity: 1
//             })
//         }

//         await cart.save()

//         return res.status(200).json({
//             message: "cart updated",
//             data: cart
//         })

//     } catch (error) {
//         console.log("error", error)
//         res.status(500).json({ error: "server error" })
//     }
// }


// // ===================
// // DECREASE FROM CART
// // ===================
// var decreaseFromCart = async (req, res) => {
//     try {
//         var userId = req.user.id
//         var { productId } = req.body

//         var cart = await Cart.findOne({ userId })

//         if (!cart) {
//             return res.status(404).json({
//                 message: "cart not found"
//             })
//         }

//         var existingItem = cart.items.find(
//             item => item.product.toString() === productId
//         )

//         if (!existingItem) {
//             return res.status(404).json({
//                 message: "item not found in cart"
//             })
//         }

//         // ➖ Decrease quantity
//         existingItem.quantity -= 1

//         // ❌ Remove item if quantity becomes 0
//         if (existingItem.quantity <= 0) {
//             cart.items = cart.items.filter(
//                 item => item.product.toString() !== productId
//             )
//         }

//         await cart.save()

//         return res.status(200).json({
//             message: "cart decreased",
//             data: cart
//         })

//     } catch (error) {
//         console.log("error", error)
//         res.status(500).json({ error: "server error" })
//     }
// }


// // ===================
// // REMOVE ITEM COMPLETELY
// // ===================
// var removeFromCart = async (req, res) => {
//     try {
//         var userId = req.user.id
//         var { productId } = req.body

//         var cart = await Cart.findOne({ userId })

//         if (!cart) {
//             return res.status(404).json({
//                 message: "cart not found"
//             })
//         }

//         cart.items = cart.items.filter(
//             item => item.product.toString() !== productId
//         )

//         await cart.save()

//         return res.status(200).json({
//             message: "item removed",
//             data: cart
//         })

//     } catch (error) {
//         console.log("error", error)
//         res.status(500).json({ error: "server error" })
//     }
// }


// // ===================
// // CLEAR CART
// // ===================
// var clearCart = async (req, res) => {
//     try {
//         var userId = req.user.id

//         var cart = await Cart.findOne({ userId })

//         if (!cart) {
//             return res.status(404).json({
//                 message: "cart not found"
//             })
//         }

//         cart.items = []

//         await cart.save()

//         return res.status(200).json({
//             message: "cart cleared",
//             data: cart
//         })

//     } catch (error) {
//         console.log("error", error)
//         res.status(500).json({ error: "server error" })
//     }
// }


// // ===================
// // EXPORTS
// // ===================
// module.exports = {
//     getCart,
//     addToCart,
//     decreaseFromCart,
//     removeFromCart,
//     clearCart
// }




var Cart = require("../Model/cartModel")

// ===================
// GET CART
// ===================
var getCart = async (req, res) => {
    try {
        var userId = req.user.id
        var cart = await Cart.findOne({ userId })

        res.status(200).json({ cart })

    } catch (error) {
        console.log("error", error)
        res.status(500).json({ error: "server error" })
    }
}


// ===================
// ADD TO CART
// ===================
var addToCart = async (req, res) => {
    try {
        var userId = req.user.id
        var { productId } = req.body

        if (!productId) {
            return res.status(400).json({ message: "productId required" })
        }

        var cart = await Cart.findOne({ userId })

        // 🟢 Create cart if not exists
        if (!cart) {
            cart = await Cart.create({
                userId,
                items: [{
                    product: productId,
                    quantity: 1
                }]
            })

            return res.status(201).json({
                message: "cart created",
                data: cart
            })
        }

        // 🟢 SAFE CHECK
        var existingItem = cart.items.find(
            item => item.product && item.product.toString() === productId
        )

        if (existingItem) {
            existingItem.quantity += 1
        } else {
            cart.items.push({
                product: productId,
                quantity: 1
            })
        }

        await cart.save()

        return res.status(200).json({
            message: "cart updated",
            data: cart
        })

    } catch (error) {
        console.log("error", error)
        res.status(500).json({ error: "server error" })
    }
}


// ===================
// DECREASE FROM CART
// ===================
var decreaseFromCart = async (req, res) => {
    try {
        var userId = req.user.id
        var { productId } = req.body

        var cart = await Cart.findOne({ userId })

        if (!cart) {
            return res.status(404).json({ message: "cart not found" })
        }

        var existingItem = cart.items.find(
            item => item.product && item.product.toString() === productId
        )

        if (!existingItem) {
            return res.status(404).json({ message: "item not found in cart" })
        }

        existingItem.quantity -= 1

        // Remove if quantity <= 0
        if (existingItem.quantity <= 0) {
            cart.items = cart.items.filter(
                item => item.product && item.product.toString() !== productId
            )
        }

        await cart.save()

        return res.status(200).json({
            message: "cart decreased",
            data: cart
        })

    } catch (error) {
        console.log("error", error)
        res.status(500).json({ error: "server error" })
    }
}


// ===================
// REMOVE ITEM
// ===================
var removeFromCart = async (req, res) => {
    try {
        var userId = req.user.id
        var { productId } = req.body

        var cart = await Cart.findOne({ userId })

        if (!cart) {
            return res.status(404).json({ message: "cart not found" })
        }

        cart.items = cart.items.filter(
            item => item.product && item.product.toString() !== productId
        )

        await cart.save()

        return res.status(200).json({
            message: "item removed",
            data: cart
        })

    } catch (error) {
        console.log("error", error)
        res.status(500).json({ error: "server error" })
    }
}


// ===================
// CLEAR CART
// ===================
var clearCart = async (req, res) => {
    try {
        var userId = req.user.id

        var cart = await Cart.findOne({ userId })

        if (!cart) {
            return res.status(404).json({ message: "cart not found" })
        }

        cart.items = []

        await cart.save()

        return res.status(200).json({
            message: "cart cleared",
            data: cart
        })

    } catch (error) {
        console.log("error", error)
        res.status(500).json({ error: "server error" })
    }
}


// ===================
// EXPORTS
// ===================
module.exports = {
    getCart,
    addToCart,
    decreaseFromCart,
    removeFromCart,
    clearCart
}
