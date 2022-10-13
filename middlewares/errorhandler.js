async function errorHandler(err, req, res, next) {
  let code;
  let message;
  if (err.name == "SequelizeValidationError") {
    code = 400;
    message = err.errors[0].message;
  } else if (err.name == "Rev Has Already Used") {
    code = 400;
    message = "Rev Has Already Used";
  } else if (err.name == "Error not found") {
    code = 404;
    message = "ERROR_NOT_FOUND";
  } else if (err.name == "ERROR_INVALID_EMAIL_OR_PASSWORD") {
    code = 401;
    message = "ERROR_INVALID_EMAIL_OR_PASSWORD";
  } else if (err.name == "Not Permit") {
    code = 403;
    message = "FORBIDDEN";
  } else if (err.name == "NOT_LOGIN") {
    code = 401;
    message = "PLEASE_LOGIN";
  } else if (err.name == "JsonWebTokenError") {
    code = 401;
    message = "INVALID_TOKEN";
  } else if (err.name == "SequelizeUniqueConstraintError") {
    code = 400;
    message = "ACCOUNT_HAS_ALREADY_BEEN_CREATED";
  } else if (
    err.name == "You Cannot Delete because there's Sale with this stock item"
  ) {
    code = 400;
    message = "You Cannot Delete because there's Sale with this stock item";
  } else if (
    err.name == "You Cannot Edit because there's Sale with this stock item"
  ) {
    code = 400;
    message = "You Cannot Edit because there's Sale with this stock item";
  } else if (err.name == "Stock is not Enough") {
    code = 400;
    message = "Stock is not Enough";
  } else {
    code = 500;
    message = "INTERNAL_SERVICE_ERROR";
  }
  res.status(code).json({ message });
}

module.exports = errorHandler;
