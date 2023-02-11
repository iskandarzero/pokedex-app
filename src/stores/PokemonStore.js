import { defineStore } from "pinia";

export const usePokemonStore = defineStore('pokemon', {
  state(){
    return {
      pokemons:[]
    }
  },
  actions:{
    addPokemon(pkm){
      this.pokemons = pkm
    }
  },
  getters:{
    showPokemon(){
      return this.pokemons
    }
  }
})