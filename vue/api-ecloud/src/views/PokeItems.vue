<template class="template">
  <h1>REF</h1>
  <hr />

  <form>
    <input type="text" v-model="nombre" />
    <select v-model="nivel" name="nivel">
      <option value="null" disabled>Seleccionar</option>
      <option>Basico</option>
      <option>Intermedio</option>
      <option>Avanzado</option>
    </select>
  </form>
  <h3>{{ nombre }} - {{ nivel }}</h3>

  <hr />

  <form>
    <div>
      <label>
        Tecnologias:
        <input type="number" min="1" max="5" v-model="formulario.numero" />
      </label>
    </div>
    <div v-for="numero in formulario.numero" :key="numero">
      <label> Tecnologia {{ numero }}: </label>
      <input type="text" v-model="formulario.nombre[numero - 1]" />
      <select v-model="formulario.nivel[numero - 1]" name="nivel">
        <option value="null" disabled>Seleccionar</option>
        <option>Basico</option>
        <option>Intermedio</option>
        <option>Avanzado</option>
      </select>
    </div>
  </form>
  <h3>{{ formulario.nombre }} - {{ nivel }}</h3>
</template>

<script setup>
import { ref } from "vue";
import { reactive } from "vue";

const nombre = ref("Vue.js");
const nivel = ref(null);

const formulario = reactive({
  //muchos reactivos
  nombre: [],
  nivel: [],
  numero: 1,
});
</script>

<style></style>
