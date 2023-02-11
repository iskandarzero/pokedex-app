<template>
  <h1>Procure e capture seus Pokémons!</h1>
  <SearchBar />
</template>

<script>
  import SearchBar from '@/components/SearchBar.vue';

  export default {
    name: "HomePage",
    components: { SearchBar }
}
</script>

<style lang="scss">
  h1 {
    margin-top: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
