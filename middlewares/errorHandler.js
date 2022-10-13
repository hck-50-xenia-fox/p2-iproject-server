async function errorHandler(err, req, res, next) {
  let code;
  let msg;
  console.log(err)
  if (err.name == "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
    code = 400
    msg = err.errors[0].message
  } else if (err.name === "Not Login") {
    code = 401
    msg = "Please Login First"
  } else if (err.name === "JsonWebTokenError") {
    code = 401
    msg = "Invalid Token"
  } else if (err.name === "Forbidden") {
    code = 403
    msg = err.name
  } else if (err.name === "Not Found") {
    code = 404
    msg = "Data not found"
  } else if (err.name === "job already exists") {
    code = 400
    msg = "job already exists"
  } else if (err.name === "unauthorized") {
    code = 401
    msg = "unauthorized"
  } else {
    code = 500
    msg = "Internal Server Error"
  }
  console.log(msg)
  res.status(code).json({ msg })
}

module.exports = errorHandler;