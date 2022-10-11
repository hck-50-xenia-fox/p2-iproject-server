const {Product} = require('../models');

class productController{
    static async fetchProduct(req, res, next){
        try {
            let data = await Product.findAll({
                attributes:{
                    exclude: ["createdAt", "updatedAt"]
                }
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = productController