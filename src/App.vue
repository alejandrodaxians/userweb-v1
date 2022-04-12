<template>
  <nav>
    <div class="dropdown">
      <router-link class="dropbtn" id= "search" to="/">SEARCH</router-link>
      <div class="dropdown-content">
        <router-link id= "get" to="/getId">GET</router-link>
        <router-link id= "get" to="/getId">...</router-link>
      </div>
    </div>
    <router-link class="header" id= "send" to="/create">CREATE</router-link>
    <router-link class="header" id= "delete" to="/delete">DELETE</router-link>
    <router-link class="header" id="config" to="/configure">CONFIGURE</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  methods: {
    myFunction () {
      document.getElementById('dropdown').classList.toggle('show')
    }
  }
}
</script>

<style lang="scss">
@import '../src/assets/style/darkstyle.scss';

@import url('https://fonts.googleapis.com/css2?family=Sen&display=swap');
</style>
