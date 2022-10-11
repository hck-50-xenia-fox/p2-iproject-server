const ErrorHandler = async (err, req, res, next) => {
  console.log(err);
  let code = 500;
  let msg = "Internal Server Error";

  res.status(code).json({
    message: msg,
  });
};

module.exports = { ErrorHandler };
