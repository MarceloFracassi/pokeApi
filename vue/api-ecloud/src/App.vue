<template>
  <TheNavbar />
  <div class="container mt-3 text-center">
    <RouterView v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </RouterView>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import TheNavbar from "./components/TheNavbar.vue";

export default {
  name: "App",
  components: {
    RouterView,
    TheNavbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  align-items: center;
}
</style>
