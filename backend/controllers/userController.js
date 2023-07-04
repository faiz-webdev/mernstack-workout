const User = require('../models/userModel');

//login user
const loginUser = async (req, res) => {
  res.json({ msg: "login success" });
};

//signup user
const signupUser = async (req, res) => {
  res.json({ msg: "signup success" });
};

module.exports = { loginUser, signupUser };
