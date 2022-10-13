const { Question } = require('../models/index')

class questionController {

    static async showQuestion (req, res, next) {
        try {

            let data = await Question.findAll()

            let package1 = data.slice(0, 10)
            let package2 = data.slice(10, 20)
            let package3 = data.slice(20, 30)
            let package4 = data.slice(30, 40)
            
            let bundle = [package1, package2, package3, package4]

            let questions = bundle[Math.floor(Math.random()*bundle.length)]

            res.status(200).json(questions) 
        } catch (error) {
            res.status(500).json({message: 'Internal Server Error'})
        }
    }

    static async addQuestion (req, res, next) {
        try {
            
            const { description, choice1, choice2, choice3, choice4, answer } = req.body

            if (answer !== choice1 && answer !== choice2 && answer !== choice3 && answer !== choice4 ) {
                throw {name: 'Not match answer'}
            }

            await Question.create({
                description,
                choice1,
                choice2,
                choice3,
                choice4,
                answer
            })

            res.status(201).json({message: `Your question has been accommodated, thank you for your participation.`})

        } catch (error) {
            if(error.name === 'SequelizeValidationError') {
                res.status(400).json({message: error.errors[0].message})
            } else if (error.name === 'Not match answer') {
                res.status(400).json({message: 'The answers that are filled out do not match the choices given'})
            } else {
                res.status(500).jsom({message: 'Internal Server Error'})
            }
        }
    }
}

module.exports = questionController