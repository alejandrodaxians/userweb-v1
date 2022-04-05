<template>
  <div class="home">
    <img alt="Cemex" src="../assets/logo.png">
    <SendQuest msg="Sends a request to RequestHandler to deploy a VNF, VNFD, and UCPe."/>
  </div>
</template>

<script>
// @ is an alias to /src
import SendQuest from '@/components/SendRequest.vue'

export default {
  name: 'HomeView',
  components: {
    SendQuest
  }
}
</script>
