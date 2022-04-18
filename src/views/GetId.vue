<template>
  <div class="getOne">
    <br>
    <GetOne msg="SENDS A REQUEST TO REQUESTHANDLER TO GET REQUEST DATA, FILTERED BY ID"/>
  </div>
</template>

<script>
import GetOne from '@/components/GetRequest.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    GetOne
  },
  data () {
    return {
      getData: []
    }
  },
  methods: {
    getRequest () {
      axios.get('')
        .then((response) => {
          console.log(response.data)
          // cuerpo
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
