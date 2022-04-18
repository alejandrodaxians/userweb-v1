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
  <component :is="'SearchAll'" />
  <component :is="'GetOne'" />
  <component :is="'DeleteRequest'" />
  <component :is="'CreateReq'" />
</template>

<style lang="scss">
@import '../src/assets/style/darkstyle.scss';
</style>

<script>
import axios from 'axios'

import SearchAll from '../src/components/SearchRequest.vue'
import GetOne from '../src/components/GetRequest.vue'
import DeleteRequest from '../src/components/DeleteRequest.vue'
import CreateReq from '../src/components/SendRequest.vue'

export default {
  name: 'App',
  data () {
    return {
      searchData: [],
      getData: [],
      deleteData: [],
      sendData: []
    }
  },
  components: {
    SearchAll,
    GetOne,
    DeleteRequest,
    CreateReq
  },
  methods: {
    search () {
      axios.get('')
        .then((response) => {
          console.log(response.data)
          response.data = this.searchData
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getRequest () {
      axios.get('')
        .then((response) => {
          console.log(response.data)
          // cuerpo
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deleteRequest () {
      axios.delete('')
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    create () {
      axios.post('', this.sendData)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
  }
}
</script>
