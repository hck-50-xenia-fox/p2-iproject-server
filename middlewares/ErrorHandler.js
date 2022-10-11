function errorHandler(error, req, res, next) {
    let code 
    let message
    if (error.name === 'SequelizeValidation Error') {
        code = 400
        message = error.errors[0].message
    } else if(error.name === 'Email/Password_Incorrect') {
        code = 401
        message = 'Email/Password Incorrect'
    }
    else {
        code = 500
        message = 'Internal server error'
    }
    res.status(code).json({message})
}

module.exports = errorHandler