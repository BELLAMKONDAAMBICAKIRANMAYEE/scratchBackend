const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes"); // <- ./ not ../

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api/auth", authRoutes);

let isConnected = false;

module.exports = async (req, res) => {
  if (!isConnected) {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
  }
  return app(req, res);
};