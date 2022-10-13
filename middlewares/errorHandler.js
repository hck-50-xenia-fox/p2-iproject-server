function errorHandler(err, req, res, next) {
  let code;
  let message;

  if (err.name === "SequelizeValidationError") {
    code = 400;
    message = err.errors[0].message;
  } else if (err.name === "Not Login") {
    code = 401;
    message = "Please Login First!";
  } else if (err.name === "JsonWebTokenError") {
    code = 401;
    message = "Invalid Token";
  } else if (err.name === "Forbidden") {
    code = 403;
    message = err.name;
  } else if (err.name === "Data Not Found") {
    code = 404;
    message = "Data Not Found";
  } else if (err.name == "error invalid email or password") {
    code = 401;
    message = err.name;
  } else if (err.name == "SequelizeUniqueConstraintError") {
    code = 400;
    message = "Email is already used";
  } else {
    code = 500;
    message = "Internal Server Error";
  }
  res.status(code).json({ message });
}

module.exports = errorHandler;
