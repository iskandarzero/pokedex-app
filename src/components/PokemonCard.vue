<template>
  <div v-for="(pokemon, index) in pokemons" v-bind:key="index" class="pokemonCard">
    <router-link :to="`/pokemon/${pokemon.name}`" class="link">
      <img v-bind:src="pokemon.sprites.front_default" />
      <h2>{{ pokemon.name }}</h2>
    </router-link>
    <div class="types">
      <p v-for="(type, index) in pokemon.types" :key="index">{{ type.type.name }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      pokemons: Object
    }
  }
</script>

<style lang="scss">
  .pokemonCard {
    display: flex;
    flex-direction: column;
    width: 130px;
    margin: 30px;
    .link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img:hover {
        width: 95px;
      }
    }
    .types {
    display: flex;
    justify-content: space-evenly;
    
    }
  }
</style>