function errorHandler(err, req, res, next) {
  let code;
  let msg;
  if (err.name == "SequelizeValidationError" || err.name == "SequelizeUniqueConstraintError") {
    let eror = err.errors.map((e) => {
      return e.message;
    });
    code = 400;
    msg = eror;
  } else if (err.name == "Not Login") {
    code = 401;
    msg = "Please login first";
  } else if (err.name == "Invalid email or pass") {
    code = 401;
    msg = "Invalid Email / Password";
  }else if (err.name == "jsonWebTokenError") {
    code = 401;
    msg = "Invalid Token";
  } else if (err.name == "Forbidden") {
    code = 403;
    msg = err.name;
  } else if (err.name == "Not Found") {
    code = 404;
    msg = "Data not found";
  } else {
    code = 500;
    msg = "Internal server error";
  }
  res.status(code).json({ msg });
}

module.exports = errorHandler;
