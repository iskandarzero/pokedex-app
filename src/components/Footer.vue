<template>
  <footer>
    <p>Alimentado pela PokeAPI v2</p>
  </footer>
</template>
  
<script>
  export default {
    name: "NavBar"
  }
</script>
  
<style lang="scss">
  footer {
    background-color: #DC0A2F;
    position: fixed;
    height: 25px;
    width: 100%;
    bottom: 0;
    p {
      display: flex;
      justify-content: center;
      margin: 0;
      color: white;
    }
  }
</style>