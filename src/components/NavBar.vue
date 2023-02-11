<template>
  <nav>
    <router-link to="/">
      <img src="/imgs/pokedex_logo.png" alt="pokedex logo">
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style lang="scss">
  nav {
    background-color: #DC0A2F;
    display: flex;
    img {
      display: flex;
      margin: 10px 0px 7px 15px;
      width: 200px;
    }
  }
</style>