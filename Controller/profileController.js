

var User = require("../Model/UserModel")
var bcrypt = require("bcrypt") // fixed typo

// ✅ GET PROFILE
var getProfile = async (req, res) => {
    try {
        var userId = req.params.id 
        if (!userId) {
            return res.status(403).json({ message: "no user found" })
        }

        var user = await User.findById(userId).select("-password")
        res.status(200).json({ user })

    } catch (error) {
        console.log("error", error)
        res.status(500).json({ message: "Server error" })
    }
}

// ✅ CREATE PROFILE (POST)
var createProfile = async (req, res) => {
    try {
        var { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields required" })
        }

        // check if user already exists
        var existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" })
        }

        // hash password
        var hashedPassword = await bcrypt.hash(password, 10)

        // create user
        var newUser = new User({
            name,
            email,
            password: hashedPassword
        })

        await newUser.save()

        res.status(201).json({
            message: "Profile created successfully",
            user: newUser
        })

    } catch (error) {
        console.log("error", error)
        res.status(500).json({ message: "Server error" })
    }
}

// ✅ UPDATE PROFILE (PUT)
var updateProfile = async (req, res) => {
    try {
        var userId = req.params.id 
        if (!userId) {
            return res.status(400).json({ message: "no user id" })
        }

        var { name, email, password } = req.body 
        var updatedUser = {}

        if (name) updatedUser.name = name
        if (email) updatedUser.email = email

        if (password) {
            var hashedPassword = await bcrypt.hash(password, 10)
            updatedUser.password = hashedPassword
        }

        var updateUserdata = await User.findByIdAndUpdate(
            userId,
            updatedUser,
            { new: true }
        )

        res.status(200).json({ updateUserdata })

    } catch (error) {
        console.log("error", error)
        res.status(500).json({ message: "Server error" })
    }
}

// ✅ DELETE PROFILE (DELETE)
var deleteProfile = async (req, res) => {
    try {
        var userId = req.params.id

        if (!userId) {
            return res.status(400).json({ message: "no user id" })
        }

        var deletedUser = await User.findByIdAndDelete(userId)

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" })
        }

        res.status(200).json({ message: "User deleted successfully" })

    } catch (error) {
        console.log("error", error)
        res.status(500).json({ message: "Server error" })
    }
}

// ✅ EXPORT ALL FUNCTIONS
module.exports = {
    getProfile,
    createProfile,
    updateProfile,
    deleteProfile
}
