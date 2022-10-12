const { Op } = require("sequelize");
const { User, Course, MyCourse } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const jwt = require("jsonwebtoken");
const { nodemailer } = require("nodemailer");
const { smtpTransport } = require("nodemailer-smtp-transport");

class Controller {
  static async register(req, res, next) {
    try {
      // console.log(req.body, "<<<");
      const { username, email, password } = req.body;
      await User.create({
        username,
        email,
        password,
      });
      res.status(201).json({
        code: 201,
        message: "Register success",
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const data = await User.findOne({ where: { email } });
      if (!data) {
        throw { name: "User not found" };
      }
      const isPasswordMatch = comparePassword(password, data.password);
      if (!isPasswordMatch) {
        throw { name: "invalid email or password" };
      }
      const token = generateToken({
        id: data.id,
        username: data.name,
        email: data.email,
      });
      res.status(200).json({
        Code: 200,
        access_token: token,
        message: "login success",
      });
    } catch (error) {
      next(error);
    }
  }
  static async loginFacebook(req, res, next) {
    try {
      const { access_token } = req.headers;
      const payload = jwt.sign(access_token, process.env.SUPABASE_SECRET);
      if (payload) {
        const [loginUser, created] = await User.findOrCreate({
          where: {
            email: payload.user_metadata.email,
            username: payload.user_metadata.email,
          },
          defaults: {
            email: payload.user_metadata.email,
            password: null,
            username: payload.user_metadata.email,
          },
          skip: ["email", "password", "username"],
          hooks: false,
        });
        const access_token = generateToken({
          id: loginUser.id,
        });
        res.status(created ? 201 : 200).json({
          access_token,
        });
      }
    } catch (error) {
      next(error);
    }
  }
  static async payment(req, res, next) {
    try {
      const midtransClient = require("midtrans-client");
      let snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: process.env.SERVER_KEY,
      });
      const order = Math.random() * 100;
      let parameter = {
        transaction_details: {
          order_id: `your transaction ${order}`,
          gross_amount: 10000,
        },
        credit_card: {
          secure: true,
        },
        customer_details: {
          username: `${req.user.username}`,
          email: `${req.user.email}`,
        },
      };

      snap.createTransaction(parameter).then((transaction) => {
        let transactionToken = transaction.token;
        console.log("transactionToken:", transactionToken);
      });
      res.status(201).json({ transactionToken: transactionToken });
    } catch (error) {
      next(error);
    }
  }
  // ini ganti baca semua data biasa aja, tampilin cardnya aja
  static async showAllCourse(req, res, next) {
    try {
      const { search } = req.query;

      const condition = { where: { status: "available" } };
      if (search) {
        condition.where.name = { [Op.iLike]: `%${search}%` };
      }
      const pages = await Course.findAndCountAll(condition);

      res.status(200).json({
        data: pages.rows,
      });
    } catch (error) {
      next(error);
    }
  }

  static async detailCourse(req, res, next) {
    try {
      const { courseId: id } = req.params;
      const data = await Course.findOne({
        where: { id },
        include: ["User"],
      });
      if (!data) {
        throw { name: "NOTFOUND" };
      }
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async addMyCourse(req, res, next) {
    try {
      const { courseId } = req.params;
      const { id } = req.username;

      const foundCourse = await Course.findByPk(courseId);
      const data = await MyCourse.create({
        UserId: id,
        CourseId: courseId,
      });
      res.status(201).json({
        code: 201,
        message: "success add course",
      });
    } catch (error) {
      next(error);
    }
  }
  static async showMyCourse(req, res, next) {
    try {
      const { id } = req.username;
      const data = await MyCourse.findAll({
        where: {
          UserId: id,
        },
        include: {
          model: Course,
        },
      });
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }
  static addSubscribe(req, res, next) {
    const { email } = req.body;
    const input = { email };
    User.create(input)
      .then(() => {
        const transporter = nodemailer.createTransport(
          smtpTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            auth: {
              user: "webmail.auto.sender@gmail.com",
              pass: "mhrztczzwoimzmxs",
            },
          })
        );

        const mailOptions = {
          from: "webmail.auto.sender@gmail.com@gmail.com",
          to: `${email}`,
          subject: `Thank you for subscribe ${username}`,
          text: "That was easy to learned!",
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) console.log(error);
          else console.log("Email sent: " + info.res);
        });

        res.redirect("/home");
      })
      .catch((err) => {
        if (!err.errors) res.send(err);
        else {
          let invalid = {};
          err.errors.forEach((v) => (invalid[v.path] = v.message));
          res.render("home", { input, invalid });
        }
      });
  }
}

module.exports = Controller;
