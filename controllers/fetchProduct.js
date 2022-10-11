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

    static async addProduct(req, res, next){
        try {
            let {name, description, price, stock, weight, imgUrl, categoryId} = req.body
            await Product.create({
                name,
                description,
                price,
                stock,
                weight,
                imgUrl,
                categoryId,
            })
            res.status(201).json({msg: 'Success add new product'})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = productController