<template>
  <h1 v-on:click="filtered" >{{ pokemon[0].name }}</h1>
  <img :src="pokemon[0].sprites.front_default" />
  <div v-for="(type, index) in pokemon[0].types" :key="index">
    <h4>{{ type.type.name }}</h4>
  </div>
  <div v-for="(stat, index) in pokemon[0].stats" :key="index">
    <p>{{ `${stats[index]} - ${stat.base_stat}` }}</p>
  </div>
  <p>{{ `Altura - ${pokemon[0].height} m` }}</p>
  <p>{{ `Peso - ${String(pokemon[0].weight).slice(0, -1)} kg` }}</p>
</template>
  
<script>
import { usePokemonStore } from '@/stores/PokemonStore';
import { storeToRefs } from 'pinia'

  export default {
    name: 'PokemonDetails',
    setup() {
      const store = usePokemonStore();
      const { showPokemon } = storeToRefs(store)

      return {
        showPokemon
      }
    },
    data() {
      return {
        pokemon: this.showPokemon.filter((pkm) => pkm.name === this.$route.params.id),
        stats: ["HP", "Attack", "Defense", "Special attack", "Special defense", "Speed"]
      }
    }
  }
</script>