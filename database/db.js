const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 10000,
      family: 4,
      retryWrites: true,
      w: "majority",
    });

    console.log("✅ Connected to database successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};


module.exports = connectToDatabase;
