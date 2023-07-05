const User = require('../models/userModel');

//login user
const loginUser = async (req, res) => {
  res.json({ msg: "login success" });
};

//signup user
const signupUser = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.signup(email, password);

    res.status(200).json({email, user});
    
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

module.exports = { loginUser, signupUser };
