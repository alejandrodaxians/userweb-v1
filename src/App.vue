<template>
  <nav>
    <router-link class="header" id= "search" to="/">SEARCH</router-link>
    <router-link class="header" id= "send" to="/create">CREATE</router-link>
    <router-link class="header" id= "delete" to="/delete">DELETE</router-link>
    <router-link class="header" id= "get" to="/getId">GET</router-link>
    <!-- <img  alt="Vue logo" src="./assets/logo.png"> -->
      </nav>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
@import '../src/assets/style/darkstyle.scss';

@import url('https://fonts.googleapis.com/css2?family=Sen&display=swap');

</style>
