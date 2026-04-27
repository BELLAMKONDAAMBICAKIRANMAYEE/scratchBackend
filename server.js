const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("../routes/authRoutes");

const app = express();

// ✅ CORS FIX
app.use(cors({
  origin: "https://scratch-daa.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.options("*", cors()); // 🔥 important

app.use(express.json());

app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ Error:", err));

// ❌ no app.listen
module.exports = app;