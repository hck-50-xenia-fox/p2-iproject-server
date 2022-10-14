const { tokenVerify } = require('../helpers/helpers');
const { User } = require('../models/');

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;

    const payload = tokenVerify(access_token);
    const findUser = await User.findByPk(payload.id);
    if (!findUser) throw { name: 'Unauthorized' };

    req.user = {
      id: findUser.id,
      email: findUser.email,
      fullName: findUser.fullName,
    };

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authentication;
