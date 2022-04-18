<template>
  <nav>
    <div class="dropdown">
      <p class="dropbtn" id= "search" to="/none">SEARCH</p>
      <div class="dropdown-content">
        <router-link id= "get" to="/">FILTERS</router-link>
        <router-link id= "get" to="/getId">ID</router-link>
      </div>
    </div>
    <router-link class="header" id= "send" to="/create">CREATE</router-link>
    <router-link class="header" id= "delete" to="/delete">DELETE</router-link>
    <router-link class="header" id="config" to="/configure">CONFIGURE</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import '../src/assets/style/darkstyle.scss';
</style>

<script>

export default {
  name: 'App',
  data () {
    return {
      searchData: [],
      getData: [],
      deleteData: [],
      sendData: []
    }
  }
}
</script>
