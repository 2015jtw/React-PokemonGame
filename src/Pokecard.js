import React, { Component } from 'react';
import './Pokecard.css'


// const pokemon_img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const fancy_pokemon_img = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

function padToThree(number) {
    if (number <= 999) {
        return `00${number}`.slice(-3);
    }
    else {
        return number;
    }

}

class Pokecard extends Component {

    static defaultProps = { id: 4, name: 'Charmander', type: 'fire', exp: 62 }

    render() {

        let imgSrc = `${fancy_pokemon_img}${padToThree(this.props.id)}.png`

        return (
            <div className='Pokecard'>
                <h1>{this.props.name}</h1>
                <img src={imgSrc} />
                <div>Type: {this.props.type}</div>
                <div>EXP: {this.props.exp}</div>
            </div >
        )
    }
}


export default Pokecard;