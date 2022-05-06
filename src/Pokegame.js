import React, { Component } from 'react'
import Pokedex from './Pokedex';


class Pokegame extends Component {

    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    }

    render() {

        let hand1 = [];
        let hand2 = [...this.props.pokemon]

        while (hand2.length > hand1.length) {
            let rand = Math.floor(Math.random() * hand2.length)
            let randPokemon = hand2.splice(rand, 1)[0];
            hand1.push(randPokemon);
        }

        let hand1Score = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let hand2Score = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

        return (
            <div>
                <Pokedex
                    pokemon={hand1}
                    exp={hand1Score}
                    isWinner={hand1Score > hand2Score}
                />
                <Pokedex
                    pokemon={hand2}
                    exp={hand2Score}
                    isWinner={hand2Score > hand1Score}
                />
            </div>
        )
    }
}

export default Pokegame;