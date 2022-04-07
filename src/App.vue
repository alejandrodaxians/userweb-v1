<template>
  <nav>
    <router-link class="header" id= "send" to="/">SEND</router-link>
    <router-link class="header" id= "delete" to="/delete">DELETE</router-link>
    <router-link class="header" id= "get" to="/getId">GET</router-link>
    <router-link class="header" id= "search" to="/search">SEARCH</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import '../src/assets/style/darkstyle.scss';

@import url('https://fonts.googleapis.com/css2?family=Sen&display=swap');

</style>
