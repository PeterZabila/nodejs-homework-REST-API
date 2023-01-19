const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const {nanoid} = require("nanoid")

const { User } = require("../../models/user");

const { RequestError, sendEmail } = require("../../helpers");

const {BASE_URL} = process.env

const register = async (req, res) => {
  const { email, password } = req.body;

  const candidate = await User.findOne({ email });

  if (candidate) {
    throw RequestError(409, `Email ${email} is already in use`);
  }

  const avatarUrl = gravatar.url(email);
  const hashPassword = await bcrypt.hash(password, 10);
  const verificationToken = nanoid();
  const newUser = await User.create({ ...req.body, password: hashPassword, avatarUrl, verificationToken });
  console.log("user created successfully")

  const mail = {
    to: email,
    subject: "Verification confirmation",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Press to verify registration</a>`
  }

  await sendEmail(mail);

  res.status(201).json({
    email: newUser.email,
    av: avatarUrl,
    verificationToken: newUser.verificationToken,
  });
};

module.exports = register;
