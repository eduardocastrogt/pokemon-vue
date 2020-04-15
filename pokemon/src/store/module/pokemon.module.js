import { getPokemon } from '../../api/pokemon.api'

const state = {
    pokemons: []
}

const getters = {
    getPokemons(state){
        return state.pokemons;
    }
}

const actions = {
    async fetchPokemon({commit}, id){
        try{
            const response = await getPokemon(id);
            commit('SET_POKEMON', response.data);
        }catch(error){
            console.error("ERROR: No se puede obtener el pokémon");
        }
    }    
}


const mutations = {
    SET_POKEMON(state, data){
        state.pokemons.push(data);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}