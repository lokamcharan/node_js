const User = require('../Model/user');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.render('index', { users });
  } catch (err) {
    res.status(500).send(err);
  }
};
