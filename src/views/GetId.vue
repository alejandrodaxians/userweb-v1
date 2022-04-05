<template>
  <div class="getOne">
    <img alt="Cemex" src="../assets/logo.png">
    <GetOne msg="Sends a request to RequestHandler to get request data."/>
  </div>
</template>

<script>
// @ is an alias to /src
import GetOne from '@/components/GetRequest.vue'

export default {
  name: 'HomeView',
  components: {
    GetOne
  }
}
</script>
