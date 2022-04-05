<template>
  <nav>
    <router-link to="/">POST</router-link> |
    <router-link to="/about">DELETE</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import '../src/assets/style/styles.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2e12ac;

    &.router-link-exact-active {
      color: #ad1111;
    }
  }
}
</style>
