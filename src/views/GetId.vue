<template>
  <div class="getOne">
    <br>
    <GetOne msg="Sends a request to RequestHandler to get request data."/>
  </div>
</template>

<script>
import GetOne from '@/components/GetRequest.vue'

export default {
  name: 'HomeView',
  components: {
    GetOne
  }
}
</script>
