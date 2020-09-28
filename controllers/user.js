const User = require('../models/user');

exports.postSignUp = async (req, res, next) => {
  try {
    const user = new User(req.body);
    const token = await user.generateAuthToken();
    const apiKey = await user.generateAPIKey();
    console.log(user);
    await user.save();
    res.status(201).send({ user, token, apiKey });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.postLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
        return res.status(401).send({error: 'Login failed! Check authentication credentials'});
    }
    const token = await user.generateAuthToken();
    await user.save();
    res.send({ user, token });
  } catch (error) {
      res.status(400).send(error);
  }
};

exports.getProfile = async (req, res, next) => {
  res.send(req.user);
};

exports.postLogOut = async (req, res, next) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
        return token.token != req.token;
    })
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.postLogOutAll = async(req, res, next) => {
  try {
    req.user.tokens.splice(0, req.user.tokens.length);
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
};