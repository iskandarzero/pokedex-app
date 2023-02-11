<template>
  <h1>Procure e capture seus Pokémon!</h1>
  <SearchBar />
</template>

<script>
  import SearchBar from '@/components/SearchBar.vue';

  export default {
    name: "HomePage",
    components: { SearchBar }
}
</script>
