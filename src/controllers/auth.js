const jwt = require("jsonwebtoken");
const User = require("../models/User");
const keys = require("../config/dev");

const generateToken = ({ name }) => {
  const t = jwt.sign({ name }, keys.jwt, { expiresIn: 60 * 60 });
  return `Bearer ${t}`;
};
module.exports.login = (req, res) => {
  const user = User.getByUserName("admin");
  if (!user) return res.status(404);
  return res.status(200).json({ token: generateToken(user) });
};
