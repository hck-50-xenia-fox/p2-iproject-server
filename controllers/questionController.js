const { Question } = require('../models/index')

class questionController {

    static async addQuestion (req, res, next) {
        try {
            
            const { description, choice1, choice2, choice3, choice4, answer } = req.body

            console.log(description, choice1, choice2, choice3, choice4, answer)

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