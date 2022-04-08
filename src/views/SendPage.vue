<template>
  <div class="home">
    <br>
    <SendQuest msg="SENDS A REQUEST TO REQUESTHANDLER TO DEPLOY A VNF, VNFD, AND UCPE"/>
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
