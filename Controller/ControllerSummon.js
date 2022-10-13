const {Summon} = require("../models")

class ControllerSummon {
    static async getSummons(req, res, next) {
        try {
            let data = await Summon.findAll({})
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}


module.exports = ControllerSummon