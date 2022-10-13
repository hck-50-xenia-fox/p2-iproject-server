function errorHandler(err, req, res, next) {
    let code
    let msg

    if(err.name === "SequelizeValidationError"){
        code = 400
        msg = err.errors.map(el => {
            return el.message
        })
    } else if(err.name === "SequelizeUniqueConstraintError"){
        code = 400
        msg = "Email already used"
    } else if(err.name === "Not Login"){
        code = 401
        msg = "Please Login First!"
    } else if(err.name === "JsonWebTokenError"){
        code = 401
        msg = "Invalid Token"
    } else if(err.name === "Invalid Email or Password"){
        code = 404
        msg = "Wrong Email or Password"
    } else {
        code = 500
        msg = "Internal Server Error"
    }
    res.status(code).json({msg})
}

module.exports = {errorHandler}