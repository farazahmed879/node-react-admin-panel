
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Users = require("../model/userModel.js");
const sideMenuModel = require("../model/sideMenuModel.js");
dotenv.config();

const Authentication = {
  // Signup
  signUp: async (req, res) => {
    const { name, email, password, type } = req.body;
    const hasUser = await Users.findOne({ email: email });
    if (hasUser) {
      return res.status(400).json({ message: "email already registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Users.create({
      name,
      email,
      password: hashedPassword,
      type,
    });

    return res.status(201).json({ message: "user registered successfully." });
  },

  // Login
  login: async (req, res) => {
    console.log("we reached");
    try {
      const { email, password } = req.body;
      console.log("we reached");
      const user = await Users.findOne({ email });

      // if email is not found in our vendor model
      if (!user) {
        return res
          .status(404)
          .json({ message: "no such user found", token: "" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      console.log("isPasswordValid", isPasswordValid);
      if (!isPasswordValid) {
        return res
          .status(401)
          .json({ message: "Invalid credentials.", token: "" });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, {
        expiresIn: "3h",
      });

      return res.status(200).json({
        message: "login success",
        token,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "internal server error" });
    }
  },

  // Getting user Data here
  getUserData: async (req, res) => {
    const userId = req.userId;

    const user = await Users.findById({ _id: userId })
      .select("-password")
      .select("-_id");
    if (!user) {
      return res.status(404).json({ message: "no such user found" });
    }
    const {type} = user
    const sideMenuDetails = await sideMenuModel.findOne({ type });
    return res.status(200).json({ message: "success", content: user, sideMenu:sideMenuDetails });
  },

};

module.exports = Authentication;

//http://ec2-35-74-182-67.ap-northeast-1.compute.amazonaws.com:2000/login
