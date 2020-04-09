import Vue from 'vue'
import Vuex from 'vuex'

import pokemonType from './module/pokemonType.module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        pokemontype: pokemonType
    }
})