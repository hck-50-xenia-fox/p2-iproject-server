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
      // console.log(req.body, "<<<<<<<<<<");
      const { email, password } = req.body;
      const data = await User.findOne({ where: { email } });
      // console.log(data,"XXXXXX");
      if (!data) {
        throw { name: "User not found" };
      }
      const isPasswordMatch = comparePassword(password, data.password);
      if (!isPasswordMatch) {
        throw { name: "invalid email or password" };
      }
      console.log(data.dataValues, "<== ini data");
      const token = generateToken({
        id: data.dataValues.id,
        username: data.dataValues.username,
        email: data.dataValues.email,
      });
      // console.log(token, "<<<");
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
  static async googleLogIn(req, res, next) {
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    console.log(req.headers);
    const ticket = await client.verifyIdToken({
      idToken: req.headers.google_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const data = await User.findOrCreate({
      where: {
        email: payload.email,
      },
      defaults: {
        username: payload.name,
        email: payload.email,
        password: "ini dari google",
        role: "Customer",
        phoneNumber: "12345",
        address: "jakarta",
      },
      hooks: false,
    });
    let user = data[0];
    const access_token = generateToken({
      id: user.id,
    });
    res.status(201).json({
      statusCode: 201,
      access_token: access_token,
      username: user.username,
      id: user.id,
      role: user.role,
    });
  }
  catch(err) {
    console.log(err);
    res.status(500).json(err);
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
          gross_amount: 50000,
        },
        credit_card: {
          secure: true,
        },
        // console.log(req.user, "<<<<");

        customer_details: {
          username: `${req.user.username}`,
          email: `${req.user.email}`,
        },
      };

      snap.createTransaction(parameter).then((transaction) => {
        let transactionToken = transaction.token;
        console.log("transactionToken:", transactionToken);
        res.status(201).json({ transactionToken: transactionToken });
      });
    } catch (error) {
      next(error);
    }
  }
  static async updateCourse(req, res, next) {
    try {
      let { courseId } = req.params;
      console.log(courseId);

      await Course.update({
        where: {
          id: courseId,
        },
      });
      res.status(200).json({ message: "Course update" });
    } catch (error) {
      next(error);
    }
  }
  // ini ganti baca semua data biasa aja, tampilin cardnya aja
  static async showAllCourse(req, res, next) {
    try {
      let dataCourse = await Course.findAll();
      res.status(200).json(dataCourse);
      // next();
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
  static async deleteCourse(req, res, next) {
    try {
      let data = await MyCourse.findByPk(req.params.id);
      if (!data) {
        throw { message: "course not found" };
      }
      await MyCourse.destroy({ where: { id: req.params.id } });
      res.status(200).json({ message: `${data.name} success to deleted` });
    } catch (error) {
      next(error);
    }
  }
  static addNodemailer(req, res, next) {
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

        res.redirect("/login");
      })
      .catch((err) => {
        if (!err.errors) res.send(err);
        else {
          let invalid = {};
          err.errors.forEach((v) => (invalid[v.path] = v.message));
          res.render("login", { input, invalid });
        }
      });
  }
}

module.exports = Controller;
