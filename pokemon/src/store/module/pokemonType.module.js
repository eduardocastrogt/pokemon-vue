import { getAllType } from '@/api/pokemonType.api'

const state = {
    types: []
}

const getters = {
    getTypes(state){
        return state.types
    }
}

const actions = {
    async fetchTypes({commit}){
        try{
            const response = await getAllType();
            commit('SET_TYPES',response.data.results);
        }catch(error){
            console.log(error);
        }
    }
}

const mutations = {
    SET_TYPES(state, data){
        state.types = data;
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}