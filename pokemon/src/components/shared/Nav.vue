<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="danger" fixed="top">
      <b-navbar-brand href="#">
          <img class="rotate" src="../../assets/poke_ball_icon.svg" width="50px" height="50px"/>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Pokédex</b-nav-item>
          <b-nav-item href="#">Pokémon Type</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Pokémon"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
          </b-nav-form>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavComponent"
};
</script>

<style scoped>
/* Rotate image, from: https://flaviocopes.com/rotate-image/ */

.rotate{
    animation: rotation 8s infinite linear;
}

@keyframes rotation{
    from{
        transform: rotate(0deg)
    }
    to{
        transform: rotate(359deg);
    }
}
</style>