<template>
  <div class="searchContainer">
    <input placeholder="Bulbasaur" type="search" v-model="searchParam" />
    <button v-on:click="searchPokemon" type="submit">Pesquisar</button>
    <div class="cardsContainer">
      <PokemonCard :pokemons="pokemons" />
    </div>
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
          this.pokemons.push(pokemon)
          if (evolutions.chain.evolves_to.length > 0) {
            const secondStage = await Promise.all(evolutions.chain.evolves_to.map(
              async (evolution) => await getPokemon(evolution.species.name)));
            const thirdStage = await Promise.all(evolutions.chain.evolves_to[0].evolves_to.map(
              async (evolution) => await getPokemon(evolution.species.name)));

              this.pokemons.push(...secondStage, ...thirdStage);
          }
          
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

<style lang="scss">
  .searchContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    input {
      color: #333;
      font-size: 1.2rem;
      margin-bottom: 20px;
      padding: 1.5rem 2rem;
      border-radius: 0.2rem;
      background-color: rgb(255, 255, 255);
      width: 23%;
    }
    button {
      background-color:#DC0A2F; /* Green */
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
    }
    .cardsContainer {
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
</style>