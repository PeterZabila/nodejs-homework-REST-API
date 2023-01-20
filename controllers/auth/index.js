const login = require("./login");
const register = require("./register");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");
const getAllUsers = require("./getAllUsers");
const verify = require("./verify");
const resendVerifyEmail = require("./resendVerifyEmail")

module.exports = {
  login,
  register,
  getCurrent,
  logout,
  updateAvatar,
  getAllUsers,
  verify,
  resendVerifyEmail,
};
