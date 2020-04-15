import httpClient from './httpClient'

const END_POINT = '/pokemon/'

const getPokemon = (id_pokemon) => httpClient.get(END_POINT+id_pokemon); 

export {
    getPokemon
}