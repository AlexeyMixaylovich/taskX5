const User = require("../models/User");

module.exports.getAll = function (req, res) {
  const users = User.getAll();
  res.json(users);
};
