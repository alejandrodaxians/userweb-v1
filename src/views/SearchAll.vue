<template>
  <div class="search">
    <br>
    <SearchAll msg="RETURNS A LIST OF REQUESTS FILTERED BY THE GIVEN PARAMETERS"/>
  </div>
</template>

<script>
import SearchAll from '@/components/SearchRequest.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    SearchAll
  },
  data () {
    return {
      searchData: []
    }
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
    }
  }
}
</script>
