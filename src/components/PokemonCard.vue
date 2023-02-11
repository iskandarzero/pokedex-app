<template>
  <div v-for="(pokemon, index) in pokemons" v-bind:key="index">
    <router-link :to="`/pokemon/${pokemon.name}`">
      <img v-bind:src="pokemon.sprites.front_default" />
      <h3>{{ pokemon.name }}</h3>
    </router-link>
    <p v-for="(type, index) in pokemon.types" :key="index">{{ type.type.name }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      pokemons: Object
    }
  }
</script>