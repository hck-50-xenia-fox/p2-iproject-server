const {Character} = require("../models")

class ControllerCharacter {
    static async getCharacters(req, res, next) {
        try {
            let data = await Character.findAll({})
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerCharacter