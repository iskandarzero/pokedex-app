<template>
  <h1>Procure e capture seus Pokémon!</h1>
  <p>
    <input placeholder="Bulbasaur" type="search" v-model="searchParam" />
  </p>
  <button v-on:click="searchPokemon" type="submit">Pesquisar</button>
  <div>
    <PokemonCard :pokemons="pokemons" />
  </div>
</template>

<script>
  import { getPokemonSpecie, getEvolutionChain, getPokemon } from '@/services/api';
  import { usePokemonStore } from '@/stores/PokemonStore';
  import { mapActions } from 'pinia';
  import PokemonCard from './PokemonCard.vue';

  export default {
    components: {
      PokemonCard
    },
    data() {
      return {
        searchParam: '',
        pokemons: []
      }
    },
    methods: {
      ...mapActions(usePokemonStore, ['addPokemon']),
      async getEvolutionChain(specie) {
          const evolutions = await getEvolutionChain(specie.evolution_chain.url);
          const pokemon = await getPokemon(evolutions.chain.species.name);
          const secondStage = await Promise.all(evolutions.chain.evolves_to.map(
            async (evolution) => await getPokemon(evolution.species.name)));
          const thirdStage = await Promise.all(evolutions.chain.evolves_to[0].evolves_to.map(
            async (evolution) => await getPokemon(evolution.species.name)));

          this.pokemons.push(pokemon, ...secondStage, ...thirdStage);
          this.addPokemon(this.pokemons);
      },

      async searchPokemon() {
        let specie = '';
        this.pokemons = []

        if (this.searchParam.trim() === '') {
          specie = await getPokemonSpecie("bulbasaur")
        } else {
          specie = await getPokemonSpecie(this.searchParam.trim())
        }

        await this.getEvolutionChain(specie)

        this.searchParam = '';
      }
    }
  }
</script>
