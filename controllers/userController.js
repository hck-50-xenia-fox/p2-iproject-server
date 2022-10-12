const { comparePassword, signToken } = require('../helpers/allHelper');
const { User, Wishlist } = require('../models');


class UserController {
  static async userRegister(req, res, next) {
    try {
      const { email, password, username } = req.body
      const newUser = await User.create({ email, password, username })
      res.status(201).json({ id: newUser.id, email: newUser.email, username: newUser.username })
    } catch (error) {
      next(error)
    }
  }
  static async userLogin(req, res, next) {
    try {
      const { email, password } = req.body
      if (!email) {
        throw { name: "Email is empty" }
      } else if (!password) {
        throw { name: "Password is empty" }
      }
      const userLogin = await User.findOne({
        where: {
          email
        }
      })
      if (!userLogin) {
        throw { name: 'Invalid' }
      }
      const isValid = comparePassword(password, userLogin.password)
      if (!isValid) {
        throw { name: 'Invalid' }
      }
      const payload = {
        id: userLogin.id
      }
      const access_token = signToken(payload)
      res.status(200).json({ access_token, status: userLogin.status })
    } catch (error) {
      next(error)
    }
  }
  static async userFavorite(req, res, next) {
    try {
      const { id } = req.user
      const userFavorite = await Wishlist.findAll({
        where: {
          UserId: id
        }
      })
      res.status(200).json(userFavorite)
    } catch (error) {
      next(error)
    }
  }
  static async newWishlist(req, res, next) {
    try {
      const { coin_name, coin_image } = req.body
      const { id } = req.user
      await Wishlist.create({
        UserId: id,
        coin_name: coin_name,
        coin_image: coin_image
      })
      res.status(201).json({ message: 'Success add to favorite' })
    } catch (error) {
      next(error)
    }
  }
  static async deleteWishlist(req, res, next) {
    try {
      const { id } = req.params
      const { id: UserId } = req.user
      const availWishlist = await Wishlist.findByPk(id)
      if (!availWishlist) {
        throw { name: 'Not_Found' }
      }
      
    } catch (error) {

    }
  }
  // static async facebookLogin(req, res, next) {
  //   try {

  //   } catch (error) {

  //   }
  // }
  static async wishListUser(req,res,next){
    try {
      const {id} = req.user
      const userWishlist = await Wishlist.findAll({
        where : {
          UserId : id
        }
      })
      res.status(200).json(userWishlist)
    } catch (error) {
      next(error)
    }
  }

  static async premiumUser(req, res, next) {
    const midtransClient = require('midtrans-client');
    // Create Snap API instance
    let snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: 'SB-Mid-server-Q-5hHH0OgKqNO5y8JB5HPh6j'
    });
    let random =  Math.floor(Math.random()*1000)
    let parameter = {
      "transaction_details": {
        // "order_id": `Premium account Expense Tracker-${userId}`,
        "order_id": `Premium account Eight Crypto-${random}`,
        "gross_amount": 50000
      },
      "credit_card": {
        "secure": true
      },
      "customer_details": {
        "first_name": `${req.user.username}`,
        "email": `${req.user.email}`,
      }
    };
    snap.createTransaction(parameter)
      .then((transaction) => {
        let transactionToken = transaction.token;
        console.log('transactionToken:', transactionToken);
        //! trx token buat client
        res.status(201).json({ transactionToken: transactionToken })
      })
      .catch((err) => {
        next(err)
      })
  }
}

module.exports = UserController