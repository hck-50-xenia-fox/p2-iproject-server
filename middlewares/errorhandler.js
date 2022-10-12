const errorhandler = async (err, req, res, next) => {
    console.log(err);
    if (
        err.name === `SequelizeValidationError` ||
        err.name === `SequelizeUniqueConstraintError`
    ) {
    let errorList = err.errors.map((el) => {
        return el.message;
    });
    res.status(400).json({
        message: errorList[0]
    });
    } else if (
        err.name === `SequelizeDatabaseError` ||
        err.name === "SequelizeForeignKeyConstraintError" ||
        err.name === `DATA_NOT_FOUND`
    ) {
    res.status(404).json({
        error: `Data not found`,
    });
    } else if (err.name === `EMAIL_IS_REQUIRED`) {
        res.status(400).json({
            error: `Email is required`
        })
    } else if (err.name === `PASSWORD_IS_REQUIRED`) {
        res.status(400).json({
            error: `Password is required`
        })
    } else if (err._message === `users validation failed`) {
        res.status(400).json({
            error: `Email is already in use`
        })
    } else if (err.name === "UNAUTHORIZED" || err.name === "JsonWebTokenError") {
        res.status(401).json({
            error: "Invalid Token",
        });
    } else if (err.name === "INVALID_CREDENTIAL") {
        res.status(401).json({
            error: `User not found/password not matched`,
        });
    } else if (err.name === "FORBIDDEN") {
        res.status(403).json({
            error: "You're not an admin!",
        });
    } else {
        res.status(500).json({
            statuscode: 500,
            error: "Internal server error",
        });
    }
}

module.exports = errorhandler