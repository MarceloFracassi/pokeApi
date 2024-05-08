<template>
  <div class="container">
    <h1>Welcome to Pokemon World</h1>
    <div class="input">
      <input
        type="text"
        v-model="pokemonName"
        placeholder="Nombre del Pokémon"
      />
      <button @click="getPokemon" class="button">Obtener Pokémon</button>
    </div>
    <div class="grid-container">
      <div v-for="pokemon in pokemons" :key="pokemon.name" class="pokemon-item">
        <h3>{{ pokemon.name }}</h3>
        <img :src="pokemon.image" alt="Pokemon" />
        <p>Tipo: {{ pokemon.type }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import "bootstrap/dist/css/bootstrap.min.css";

export default {
  data() {
    return {
      pokemons: [],
      pokemonName: "",
    };
  },

  methods: {
    async getPokemon() {
      try {
        const URL = `https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`;
        const res = await fetch(URL);
        const data = await res.json();
        const pokemon = {
          name: data.name,
          image: data.sprites.front_default,
          type: data.types.map((type) => type.type.name).join(", "),
        };
        this.pokemons.push(pokemon);
      } catch (error) {
        alert("Error al obtener datos de la PokeAPI:", error);
      }
    },
  },
};
</script>

<style>
.container {
  text-align: center;
}

.input {
  margin-bottom: 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.pokemon-item {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
