<template>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/PokeItems">Pokemons</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Script">New-Script</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  components: { RouterLink },
};
</script>

<style>
ul {
  list-style: none !important;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  background: rgb(240, 83, 83);
  padding: 1rem;
  margin-top: 0;
}
</style>
