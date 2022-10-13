async function errorHandler(err, req, res, next) {
  let message;
  let code;
  console.log(err);
  if (err.name === "SequelizeValidationError") {
    message = err.errors[0].message;
    code = 400;
  } else if (err.name === "SequelizeUniqueConstraintError") {
    code = 400;
    message = err.errors[0].message;
  } else if (err.name === "Data not found") {
    code = 404;
    message = err.name;
  } else if (err.name === "Not Login") {
    code = 401;
    message = "Please Login First";
  } else if (err.name === "Invalid email or password") {
    code = 401;
    message = err.name;
  } else if (err.name === "JsonWebTokenError") {
    code = 401;
    message = "Invalid token";
  } else if (err.name === "Forbidden") {
    code = 403;
    message = err.name;
  } else if (err.name === "Email is required") {
    code = 400;
    message = err.name;
  } else if (err.name === "Password is required") {
    code = 400;
    message = err.name;
  } else {
    code = 500;
    message = "Internal server error";
  }
  res.status(code).json({ message });
}

module.exports = errorHandler;
