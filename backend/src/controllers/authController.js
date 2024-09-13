require("dotenv").config({ path: `${process.cwd()}/.env` });

const user = require("../../db/models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const signup = async (req, res, next) => {
  const body = req.body;
  if (!["1", "2"].includes(body.userType)) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid userType",
    });
  }
  const newUser = await user.create({
    userType: body.userType,
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: body.password,
    confirmPassword: body.confirmPassword,
  });

  const result = newUser.toJSON();
  delete result.password;
  result.token = generateToken({
    id: result.id,
  });

  if (!result) {
    return res.status(400).json({
      status: "fail",
      message: "Failed to create user",
    });
  }
  return res.status(201).json({
    status: "success",
    message: "User created successfully",
    data: result,
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      status: "fail",
      message: "please provide email and password",
    });
  }
  const result = await user.findOne({ where: { email } });
  if (!result) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid email or password",
    });
  }

  const isPasswordMatched = await bcrypt.compare(password, result.password);
  if (!isPasswordMatched) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid email or password",
    });
  }
  const token = generateToken({
    id: result.id,
  });
  return res.status(200).json({
    status: "success",
    message: "User logged in successfully",
    data: {
      token,
    },
  });
};

const authentication = async (req, res, next) => {
  let idToken = "";
  if (
    req.headers.authorization &&
    req.headers.authorization.startwith("Bearer")
  ) {
    idToken = req.headers.authorization.split(" ")[1];
  }
  if (!idToken) {
    return res.status(400).json({
      status: "fail",
      message: "Please login to get access",
    });
  }
  const tokenDetail = jwt.verify.idToken(idToken, process.env.JWT_SECRET_KEY);
  const freshUser = user.findByPk(tokenDetail.id);
  if (!freshUser) {
    return res.status(400).json({
      status: "fail",
      message: "User no longer exists",
    });
  }
  req.user = freshUser;
  return next();
};

module.exports = { signup, login, authentication };
