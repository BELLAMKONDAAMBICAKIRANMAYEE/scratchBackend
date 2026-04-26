const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/users", async (req, res) => {
  const users = await User.find();

  console.log("📊 All Users:", users); // 🔥 prints all users

  res.json(users);
});
module.exports = router;