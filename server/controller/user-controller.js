import User from "../models/user.js";
import Token from "../models/token.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userSignup = async (req, res) => {
  let userEmail = await User.findOne({ email: req.body.email });
  let userUsername = await User.findOne({ username: req.body.username });

  if (userEmail) {
    return res.status(409).json({ msg: "Email already exists" });
  }

  if (userUsername) {
    return res.status(409).json({ msg: "Username already taken" });
  }

  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const hashConfirmPassword = await bcrypt.hash(req.body.confirmPassword, 10);

    const user = {
      email: req.body.email,
      username: req.body.username,
      password: hashPassword,
      confirmPassword: hashConfirmPassword,
    };

    const newUser = new User(user);
    await newUser.save();
    return res.status(200).json({ msg: "Signup successfull" });
  } catch (error) {
    return res.status(500).json({ msg: "error while signing up" });
  }
};

export const userLogin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(409).json({ msg: "User not found." });
  }

  try {
    const match = await bcrypt.compare(req.body.password, user.password);

    if (match) {
      const accessToken = jwt.sign(user.toJSON(), process.env.jwtPrivateKey, {
        expiresIn: "15m",
      });
      const refreshToken = jwt.sign(user.toJSON(), process.env.jwtRefreshKey);

      const newToken = new Token({ token: refreshToken });
      await newToken.save();

      return res.status(200).json({
        accessToken: accessToken,
        refreshToken: refreshToken,
        username: user.username,
        email: user.email,
      });
    } else {
      res.status(400).json({ msg: "invalid credentials" });
    }
  } catch (error) {
    return res.status(500).json({ msg: "login error" });
  }
};
