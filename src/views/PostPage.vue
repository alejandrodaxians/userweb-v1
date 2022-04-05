<template>
  <div class="home">
    <img alt="Cemex" src="../assets/logo.png">
    <HelloWorld msg="Sends a request to RequestHandler to deploy a VNF, VNFD, and UCPe."/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
