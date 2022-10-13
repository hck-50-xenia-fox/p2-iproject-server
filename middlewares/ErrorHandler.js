const ErrorHandler = async (err, req, res, next) => {
  console.log(err);
  let code = 500;
  let msg = "Internal Server Error";
  if (err.name === "UNAUTHORIZED") {
    (code = 401), (msg = "You need to login!");
  } else if (err.name === "FORBIDDEN") {
    code = 403;
    msg = "Forbidden";
  }
  res.status(code).json({
    message: msg,
  });
};

module.exports = { ErrorHandler };
