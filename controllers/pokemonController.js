const {getPokemon,getAllPokemon,getAllPokemonNames} = require('pkmonjs')
const axios = require('axios')

class pokemonController {

    static async getAllPokemon (req, res, next) {
        try {
    
            const pokemon = await getAllPokemon()

            res.status(200).json(pokemon)

        } catch (error) {
            res.status(500).json({message: 'Internal Server Error'})
        }
    }

    static async getPokemonDetail (req, res, next) {
        try {
            
            let name = req.params.name

            const pokemon = await getPokemon(`${name}`)

            if (!pokemon) {
                return {name: 'pokemon not found'}
            }

            res.status(200).json(pokemon)
            
        } catch (error) {
            if (error.name === 'pokemon not found') {
                res.status(404).json({message: "Sorry, the name of the pokemon you are looking for does'nt exist"})
            } else {
                res.status(500).json({message: 'Internal Server Error'})
            }
        }
    }
}

module.exports = pokemonController