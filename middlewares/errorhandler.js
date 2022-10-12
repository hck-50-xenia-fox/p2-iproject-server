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
        err.name === "PRODUCT_NOT_FOUND" ||
        err.name === `SequelizeDatabaseError` ||
        err.name === "CATEGORY_NOT_FOUND" ||
        err.name === "HISTORY_NOT_FOUND" ||
        err.name === "SequelizeForeignKeyConstraintError"
    ) {
    res.status(404).json({
        statuscode: 404,
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
    } else if (err.name === "UNAUTHORIZED" || err.name === "JsonWebTokenError") {
        res.status(401).json({
            statuscode: 401,
            error: "Invalid Token",
        });
    } else if (err.name === "INVALID_CREDENTIAL") {
        res.status(401).json({
            statuscode: 401,
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