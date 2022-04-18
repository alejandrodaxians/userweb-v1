<template>
  <div class="home">
    <br>
    <CreateReq msg="SENDS A REQUEST TO REQUESTHANDLER TO DEPLOY A VNF, VNFD, AND UCPE"/>
  </div>
</template>

<script>
import axios from 'axios'
import CreateReq from '@/components/SendRequest.vue'

export default {
  name: 'HomeView',
  components: {
    CreateReq
  },
  data () {
    return {
      sendData: []
    }
  },
  methods: {
    create () {
      axios.post('', this.sendData)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
  }
}
</script>
