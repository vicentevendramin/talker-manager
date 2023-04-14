const express = require('express');
const { generateToken } = require('../utils');
const { validateUser } = require('../middlewares/validateUser');

const loginRouter = express.Router();

loginRouter.post('/', validateUser, (_req, res) => {
  const tokenObj = { token: generateToken() };

  res.status(200).json(tokenObj);
});

module.exports = {
  loginRouter,
};