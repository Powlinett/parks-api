const User = require('../models/user');

const checkAPIKey = async (req, res, next) => {
  const apiKey = req.header('apikey');
  try {
    const user = await User.findOne({apiKey: apiKey});
    if (!user) {
      throw new Error();
    }
  } catch(error) {
    res.status(401).send({ error: 'Not authorized to access this resource' });
  }
  next();
}

module.exports = checkAPIKey;