const express = require("express");
const User = require("../models/user.model");
const Personal = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/checkapi", (req, res) => {
  res.json({ message: "API is working" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (email === "" || password === "") {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  const user = await User.findOne({ email: email });

  try {
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ user: user }, "1234556");

      return res.status(200).json({
        message: "Successfully logged in",
        token: token,
      });
    } else {
      return res.status(400).json({
        message: "Password is incorrect",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: err.message,
    });
  }
});

router.post("/register", async (req, res) => {
  const user = new User(req.body);
  try {
    if (user.name === "" || user.email === "" || user.password === "") {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
    user.password = await bcrypt.hash(user.password, 10);
    const savedUser = await user.save();

    // const savedUser= await User.create({         //alternate way to create a new user
    //   fname: user.fname,
    //   lname: user.lname,
    //   email: user.email,
    //   password: user.password,
    // });
    res.status(200).json({ message: "User created", user: savedUser });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({
        message: "Email already exists! Please enter a different email.",
      });
    } else {
      res.status(400).json({ message: "An error occurred" });
    }
    console.log(err);
  }
  console.log(req.body);
});

router.post("/formdetails", async (req, res) => {
  const email = req.body.email;
  const personal = req.body.personal;
  const education = req.body.education;
  console.log(education);
  try {
    User.updateOne(
      { email: email },
      {
          personal: personal,
          education: education,
      },
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      }
    );
    const savedUser = await User.findOne({ email: email });

    res.status(200).json({ message: "Details updated", user: savedUser });
  } catch (err) {
    console.log(err);
  }
});

module.exports = {
  router: router,
};
