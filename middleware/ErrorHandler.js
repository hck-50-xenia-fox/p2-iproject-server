const ErrorHandler = async (error, req, res, next) => {
  let code = 500;
  let msg = "ISE";

  console.log(error);
  if (
    error.name === "SequelizeValidationError" ||
    error.name === "SequelizeUniqueConstraintError"
  ) {
    code = 400;
    msg = `${error.errors[0].message}`;
  } else if (error === "Not Found") {
    code = 404;
    msg = "error not found";
  } else if (error.name === "invalid email or password") {
    code = 401;
    msg = "invalid email or password";
  } else if (error.name === "forbidden") {
    code = 403;
    msg = "forbidden";
  } else if (error.name === "not found") {
    code = 404;
    msg = "not found";
  }

  res.status(code).json({ error: { message: msg } });
};

module.exports = ErrorHandler;
