const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
require("../db/conn");
const User = require("../model/userSchema");
const auth = require("../middleware/auth");

router.post("/register", async (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) {
    return res.status(422).json({ error: `Don't leave fields empty.` });
  }

  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(422).json({ error: `Email already exist.` });
    } else {
      const user = new User({ name, email, phone, password });
      await user.save();
      res.status(201).json({ message: "User registered successfully." });
    }
  } catch (error) {
    console.error(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Do not leave any fields empty" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      // console.log(userLogin);
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      res.cookie("jwttoken", token, {
        expires: new Date(Date.now() + 604800), // 7 days
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Password Incorrect." });
      } else {
        res.json({ userId: userLogin._id, message: "Login successful." });
      }
    } else {
      res.status(400).json({ error: "Incorrect Email." });
    }
  } catch (error) {
    console.error(error);
  }
});

router.get("/logout", auth, async (req, res) => {
  try {
    res.clearCookie("jwttoken");
    await req.rootUser.save();
    res.status(200).json({ message: "Logout Successful" });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
