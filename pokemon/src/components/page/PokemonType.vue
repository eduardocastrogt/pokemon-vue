<template>
  <div class="row">
    <br>
    <div class="col-md-12 col-lg-12">
      <b-card-group columns>
        <b-card 
          overlay
          :title="t.name"
          text-variant="badge-dark"
          :class="[t.name]" 
          :img-src="require(`../../assets/image/tipo_pokemon/${t.name}.svg`)" 
          img-height="200"
          img-weidth="200"
          v-for="(t, index) in getTypes" :key="index">
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PokemonType",
  computed: {
    ...mapGetters(["getTypes"])
  },
  methods: {
    ...mapActions(["fetchTypes"])
  },
  async mounted() {
    if (this.getTypes.length == 0) {
      await this.fetchTypes();
    }
  }
};
</script>
