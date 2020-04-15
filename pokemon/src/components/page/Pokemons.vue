<template>
    <div>
        <Google></Google>
        <!-- {{getPokemons}} -->
        <!-- <img :src="getPokemons[0].sprites.back_default"/> -->
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import Google from 'vue-loading-spinner/src/components/Google'
export default {
    name: "Pokemon",
    components: {
        Google
    },
    computed:{
        ...mapGetters(['getPokemons'])
    },
    methods:{
        ...mapActions(['fetchPokemon'])
    },
    async mounted(){
        if(this.getPokemons.length == 0){
            await this.fetchPokemon(1);
        }
    }
}
</script>