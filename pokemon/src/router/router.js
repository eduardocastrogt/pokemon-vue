import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import PokemonType from '../components/page/PokemonType.vue'
import ContenedorComponent from '../components/shared/Contenedor.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
        {path: '/pokemon', name: 'pokemon', component: ContenedorComponent, children: [
            {path: 'type', name: 'pokemontype', component: PokemonType}
        ]}
        
    ]
})