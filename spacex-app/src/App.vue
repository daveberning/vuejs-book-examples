<template>
  <div id="app">
    <img src="./assets/spacex.png" width="200" alt="The SpaceX Logo">
    <router-view/>
  </div>
</template>

<style lang="scss">
* { box-sizing: border-box; }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
