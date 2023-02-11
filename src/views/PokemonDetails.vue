<template>
  <div class="detailsCard">
    <div class="pokemonInfo">
      <img :src="pokemon[0].sprites.front_default" />
      <div class="pokemonMeasures">
        <p>{{ `Altura - ${pokemon[0].height} m` }}</p>
        <p>{{ `Peso - ${String(pokemon[0].weight).slice(0, -1)} kg` }}</p>
      </div>
    </div>
    <h1 v-on:click="filtered" >{{ pokemon[0].name }}</h1>
    <div class="types">
      <h4 v-for="(type, index) in pokemon[0].types" :key="index">
        {{ type.type.name }}
      </h4>
    </div>
    <div>
      <p v-for="(stat, index) in pokemon[0].stats" :key="index">
        {{ `${stats[index]} - ${stat.base_stat}` }}
      </p>
    </div>
  </div>
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

<style lang="scss">
  .detailsCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    .types {
      display: flex;
      h4 {
        margin: 0 10px 15px;
      }
    }
    h1 {
      margin: 0;
    }
    .pokemonInfo {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 250px;
      }
    }
  }
</style>